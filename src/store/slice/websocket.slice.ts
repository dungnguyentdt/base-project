import { ParamsSendRpcMessage, ResponseWebsocket } from "@/libs/websocket/libs/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const websocketSlice = createSlice({
  name: "websocket",
  initialState: {
    isReady: false,
    messages: {} as ResponseWebsocket,
    error: null,
  },
  reducers: {
    connected: (state) => {
      state.isReady = true;
    },
    disconnected: (state) => {
      state.isReady = false;
    },
    messageReceived: (state, action: PayloadAction<ResponseWebsocket>) => {
      const messages = action.payload;
      state.messages = messages;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    resetData: (state) => {
      state.messages = {} as ResponseWebsocket;
      state.error = null;
    },
    connect: () => {}, // Handled by middleware
    disconnect: () => {}, // Handled by middleware
    sendRpcMessage: (_, _action: PayloadAction<ParamsSendRpcMessage>) => {}, // Handled by middleware
  },
});

export const { connect, connected, disconnected, messageReceived, sendRpcMessage, disconnect, error, resetData } =
  websocketSlice.actions;

export default websocketSlice.reducer;
