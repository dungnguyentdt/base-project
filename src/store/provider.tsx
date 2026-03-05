"use client";

import { store } from "@/store";
import { loadState, saveState } from "@/store/persistence";
import { loadPersistedSettingState } from "@/store/slice/setting.slice";
import { loadPersistedUserState } from "@/store/slice/user.slice";
import { useEffect } from "react";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Load persisted state on mount
    const persistedState = loadState();

    if (persistedState) {
      if (persistedState.user) {
        store.dispatch(loadPersistedUserState(persistedState.user));
      }
      if (persistedState.setting) {
        store.dispatch(loadPersistedSettingState(persistedState.setting));
      }
    }

    // Subscribe to store changes and save to localStorage
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      saveState({
        user: state.user,
        setting: state.setting,
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
