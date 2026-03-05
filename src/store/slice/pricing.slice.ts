import { Quote } from "@/assets/proto/pricing_model_pb";
import { RpcMessage } from "@/assets/proto/rpc_pb";
import { createSlice } from "@reduxjs/toolkit";
import { messageReceived } from "./websocket.slice";
interface QuotesBySymbol {
  [key: string]: Quote.AsObject;
}
const buildQuotesMap = (quotes: Quote.AsObject[]): QuotesBySymbol =>
  quotes.reduce((map, quote) => {
    map[quote.symbolCode] = quote;
    return map;
  }, {} as QuotesBySymbol);

interface PricingState {
  quotesBySymbol: QuotesBySymbol | null;
  selectedQuote: Quote.AsObject | null;
}

const initialState: PricingState = {
  quotesBySymbol: null,
  selectedQuote: null,
};

export const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(messageReceived, (state, action) => {
      const { payloadClass, response } = action.payload;
      if (payloadClass === RpcMessage.Payload.LAST_QUOTE_RES) {
        const lastQuotesList = response.quotesList as Quote.AsObject[];
        state.quotesBySymbol = buildQuotesMap(lastQuotesList);
      }
      if (payloadClass === RpcMessage.Payload.QUOTE_EVENT) {
        const quotesList = response.quoteList as Quote.AsObject[];
        const newQuotes = buildQuotesMap(quotesList);
        const result = { ...state.quotesBySymbol, ...newQuotes };
        state.quotesBySymbol = result;
        if (state?.selectedQuote?.symbolCode && result[state.selectedQuote.symbolCode]) {
          state.selectedQuote = result[state.selectedQuote.symbolCode]!;
        }
      }
    });
  },
});

export const {} = pricingSlice.actions;
export default pricingSlice.reducer;
