import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BalanceState {
  amount: number;
  currency: string;
}

const initialState: BalanceState = {
  amount: 0,
  currency: "USD",
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setBalance(state, action: PayloadAction<{ amount: number; currency: string }>) {
      state.amount = action.payload.amount;
      state.currency = action.payload.currency;
    },
    incrementBalance(state, action: PayloadAction<number>) {
      state.amount += action.payload;
    },
    decrementBalance(state, action: PayloadAction<number>) {
      state.amount -= action.payload;
    },
    resetBalance(state) {
      state.amount = initialState.amount;
      state.currency = initialState.currency;
    },
  },
});

export const { setBalance, incrementBalance, decrementBalance, resetBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
