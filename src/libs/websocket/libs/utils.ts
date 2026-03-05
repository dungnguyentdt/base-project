import { RpcMessage } from "@/assets/proto/rpc_pb";
import { DEBUG_MODE } from "./config";
import { RPC_MAPPING } from "../rpc-mapping";
import { PayLoadClass } from "./interface";

export function getParamsFromUrl(url: string): { [key: string]: string } {
  const params: { [key: string]: string } = {};
  const queryString = url.split("?")[1];
  if (!queryString) {
    return params;
  }
  const pairs = queryString.split("&");
  pairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    if (key) {
      params[decodeURIComponent(key)] = decodeURIComponent(value ?? "");
    }
  });
  return params;
}

export const decodeGrpcPayload = (payloadClass: PayLoadClass, payloadData: Uint8Array): any => {
  try {
    const rpcClass = RPC_MAPPING[payloadClass];
    if (!rpcClass) {
      logWebsocketError({
        messages: [
          `Not found RpcClass ${payloadClass}`,
          "Please check if RpcClass exists in the RPC_MAPPING within the constants file",
        ],
      });
    }
    const deserializedObject = rpcClass.deserializeBinary(payloadData);
    return deserializedObject.toObject();
  } catch (error) {
    const namePayloadClass = getKeyFromValue(payloadClass);
    logWebsocketError({ status: "send", messages: [namePayloadClass] });
    return null;
  }
};

export function getKeyFromValue(payloadClass: PayLoadClass): string | undefined {
  for (const key in RpcMessage.Payload) {
    if (Object.prototype.hasOwnProperty.call(RpcMessage.Payload, key)) {
      if (RpcMessage.Payload[key as keyof typeof RpcMessage.Payload] === payloadClass) {
        return key;
      }
    }
  }
  return undefined;
}

export const logWebSocketRpcReceiveMessage = (payloadClass: PayLoadClass, payloadData: Uint8Array) => {
  if (payloadData instanceof Uint8Array) {
    const rpcClass = RPC_MAPPING[payloadClass];
    if (!rpcClass) {
      logWebsocketError({
        messages: [
          `Not found RpcClass ${payloadClass}`,
          "Please check if RpcClass exists in the RPC_MAPPING within the rpc-mapping file",
        ],
      });
    }
    const decodedData = decodeGrpcPayload(payloadClass, payloadData);
    const namePayloadClass = getKeyFromValue(payloadClass);
    logWebsocketSuccess({
      status: "receive",
      messages: [namePayloadClass, decodedData],
    });
  } else {
    logWebsocketSuccess({ status: "receive", messages: [payloadData] });
  }
};

export const logWebsocketRpcSendMessage = (
  payloadClass: RpcMessage.PayloadMap[keyof RpcMessage.PayloadMap],
  payloadData: Uint8Array | string,
) => {
  if (payloadData instanceof Uint8Array) {
    const rpcClass = RPC_MAPPING[payloadClass];
    if (!rpcClass) {
      logWebsocketError({
        messages: [
          `Not found RpcClass ${payloadClass}`,
          "Please check if RpcClass exists in the RPC_MAPPING within the constants file",
        ],
      });
    }
    const decodedData = decodeGrpcPayload(payloadClass, payloadData);
    const namePayloadClass = getKeyFromValue(payloadClass);
    logWebsocketSuccess({
      status: "send",
      messages: [namePayloadClass, decodedData],
    });
  } else {
    logWebsocketSuccess({ status: "send", messages: [payloadData] });
  }
};

export function logWebsocketSuccess({ status, messages }: { status?: "send" | "receive"; messages: any[] }): void {
  if (DEBUG_MODE) {
    console.info(
      `%cSocket`,
      "color:white;font-weight:bold;background:#0194ff;padding:2px 6px",
      status ? status : "",
      ...messages,
    );
  }
}

export function logWebsocketError({ status, messages }: { status?: "send" | "receive"; messages: any[] }): void {
  if (DEBUG_MODE) {
    console.error(
      `%cSocket`,
      "color:white;font-weight:bold;background:#0194ff;padding:2px 6px",
      status ? status : "",
      ...messages,
    );
  }
}

/**
 * Returns the exponential backoff delay.
 *
 * For attempt 0, returns 0.
 * For attempt 1, returns baseDelay.
 * For attempt 2, returns baseDelay * 2, etc.
 *
 * @param attempt - The current retry attempt (0-indexed).
 * @param baseDelay - The initial delay in milliseconds.
 * @param maxDelay - The maximum delay in milliseconds.
 * @returns The delay time in milliseconds.
 */
export function getExponentialBackoffDelay(attempt: number, baseDelay: number = 2000): number {
  const delay = baseDelay * Math.pow(2, attempt);
  return delay;
}
