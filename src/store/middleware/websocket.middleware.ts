import { RpcMessage } from "@/assets/proto/rpc_pb";
import { DEBUG_MODE, MAX_RECONNECT_ATTEMPTS, WEBSOCKET_PING_INTERVAL } from "@/libs/websocket/libs/config";
import {
  decodeGrpcPayload,
  getExponentialBackoffDelay,
  getKeyFromValue,
  logWebsocketError,
  logWebSocketRpcReceiveMessage,
  logWebsocketRpcSendMessage,
  logWebsocketSuccess,
} from "@/libs/websocket/libs/utils";

import { Dispatch, Middleware, MiddlewareAPI, UnknownAction } from "redux";

const url = process.env.NEXT_PUBLIC_WEBSOCKET_URL || "";
let reconnectAttempts = 0;
let timerTimeout: any = null;
let timerInterval: any = null;

/**
 * Called when WebSocket connection is established.
 * Resets reconnect attempts and starts a ping timer.
 */
const handleOpen = (store: MiddlewareAPI<Dispatch<UnknownAction>, any>, socket: WebSocket): void => {
  reconnectAttempts = 0;
  if (timerTimeout) clearTimeout(timerTimeout);

  // Start interval to send ping if the connection is ready.
  timerInterval = setInterval(() => {
    if (!socket) return;
    if (store.getState().websocket.isReady) {
      socket.send("ping");
    }
  }, WEBSOCKET_PING_INTERVAL);

  store.dispatch({ type: "websocket/connected" });
  logWebsocketSuccess({ messages: ["WebSocket connection established."] });
};

/**
 * Called when a message is received via WebSocket.
 * Deserializes and decodes the payload, then dispatches a messageReceived action.
 */
const handleMessage = (event: MessageEvent, store: MiddlewareAPI<Dispatch<UnknownAction>, any>): void => {
  // Only process binary messages
  if (typeof event.data === "string") return;

  const rpc = RpcMessage.deserializeBinary(event.data);
  const payloadClass = rpc.getPayloadClass();
  const response = rpc.getPayloadData() as Uint8Array;
  const decodedResponse = decodeGrpcPayload(payloadClass, response);

  logWebSocketRpcReceiveMessage(payloadClass, response);
  store.dispatch({
    type: "websocket/messageReceived",
    payload: {
      payloadClass,
      response: decodedResponse,
    },
  });
};

/**
 * Called when a WebSocket error occurs.
 * Dispatches an error action and logs the error.
 */
const handleError = (error: Event, store: MiddlewareAPI<Dispatch<UnknownAction>, any>): void => {
  logWebsocketError({ messages: ["WebSocket error occurred:", error] });
  store.dispatch({ type: "websocket/error", payload: error });
};

/**
 * Called when the WebSocket connection is closed.
 * Uses an exponential backoff to attempt reconnection.
 */
const handleClose = (store: MiddlewareAPI<Dispatch<UnknownAction>, any>): void => {
  const reconnectionDelay = getExponentialBackoffDelay(reconnectAttempts);
  if (timerInterval) clearInterval(timerInterval);

  timerTimeout = setTimeout(() => {
    if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
      window.location.pathname = "/login";
      return;
    }
    store.dispatch({ type: "websocket/connect" });
    reconnectAttempts++;
  }, reconnectionDelay);

  store.dispatch({ type: "websocket/disconnected" });
  logWebsocketError({ messages: ["WebSocket connection closed."] });
};

/**
 * Sends a message via the WebSocket after constructing a RpcMessage.
 */
const handleSendMessage = (socket: WebSocket, payload: any): void => {
  if (socket.readyState !== WebSocket.OPEN) return;

  const { rpcService, payloadClass, payloadData } = payload;
  try {
    const currentDate = new Date();
    const rpcMessage: RpcMessage = new RpcMessage();
    rpcMessage.setVersion("1");
    rpcMessage.setId(currentDate.getTime());
    rpcMessage.setService(rpcService);
    rpcMessage.setPayloadClass(payloadClass);
    rpcMessage.setContextId(currentDate.getTime());
    rpcMessage.setPayloadData(payloadData);
    socket.send(rpcMessage.serializeBinary());

    if (DEBUG_MODE && typeof payloadData !== "string" && payloadClass) {
      logWebsocketRpcSendMessage(payloadClass, payloadData);
    }
  } catch (error) {
    const namePayloadClass = getKeyFromValue(payloadClass);
    logWebsocketError({ status: "send", messages: [namePayloadClass] });
  }
};

/**
 * WebSocket middleware intercepts actions to manage WebSocket connections.
 */
const websocketMiddleware: Middleware = (store: MiddlewareAPI<Dispatch<UnknownAction>, any>) => {
  let socket: WebSocket | null = null;

  return (next) => (action: any) => {
    switch (action.type) {
      case "websocket/connect": {
        if (socket) {
          socket.close();
          socket = null;
        }
        const token = store.getState().user.user?.accessToken;
        const urlWithToken = token ? `${url}?token=${token}` : url;
        socket = new WebSocket(urlWithToken);
        socket.binaryType = "arraybuffer";
        socket.onopen = () => handleOpen(store, socket!);
        socket.onmessage = (event: MessageEvent) => handleMessage(event, store);
        socket.onerror = (error: Event) => handleError(error, store);
        socket.onclose = () => handleClose(store);
        break;
      }
      case "websocket/sendRpcMessage": {
        if (socket && socket.readyState === WebSocket.OPEN) {
          handleSendMessage(socket, action.payload);
        }
        break;
      }
      case "websocket/disconnect": {
        reconnectAttempts = 0;
        if (socket) {
          socket.close();
          socket = null;
        }
        break;
      }
      default:
        break;
    }
    return next(action);
  };
};

export default websocketMiddleware;
