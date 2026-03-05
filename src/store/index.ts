import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import userSlice from "./slice/user.slice";
import systemSlice from "./slice/system.slice";
import settingSlice from "./slice/setting.slice";
import balanceSlice from "./slice/balance.slice";
import websocketReducer from "./slice/websocket.slice";
import websocketMiddleware from "./middleware/websocket.middleware";

export const store = configureStore({
  reducer: {
    user: userSlice,
    system: systemSlice,
    setting: settingSlice,
    balance: balanceSlice,
    websocket: websocketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(websocketMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
