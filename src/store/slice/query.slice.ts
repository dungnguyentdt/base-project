import { Symbol } from "@/assets/proto/query_model_pb";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageReceived } from "./websocket.slice";
import { RpcMessage } from "@/assets/proto/rpc_pb";

interface QueryState {
  selectedSymbol: Symbol.AsObject | null;
  symbolList: Symbol.AsObject[];
  totalBalance: number;
  tabClickIndex: number;
  isSuspendTrading: boolean;
}

const initialState: QueryState = {
  selectedSymbol: null,
  symbolList: [],
  totalBalance: 0,
  tabClickIndex: 0,
  isSuspendTrading: false,
};

export const tradeSlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setTotalBalance: (state, action: PayloadAction<number>) => {
      state.totalBalance = action.payload;
    },
    selectSymbol: (state, action: PayloadAction<Symbol.AsObject | null>) => {
      state.selectedSymbol = action.payload;
    },
    updateTabClickIndex: (state) => {
      state.tabClickIndex = state.tabClickIndex + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(messageReceived, (state, action) => {
      const { payloadClass, response } = action.payload;
      if (payloadClass === RpcMessage.Payload.SYMBOL_LIST_RES) {
        const symbolList = response.symbolList as Symbol.AsObject[];
        state.symbolList = symbolList;
      }
    });
  },
});
export const { selectSymbol, setTotalBalance, updateTabClickIndex } = tradeSlice.actions;

export default tradeSlice.reducer;
