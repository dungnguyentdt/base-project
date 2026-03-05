import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { clearUserInfo } from "./user.slice";
import { Timezone } from "@/utils/dayjs";

export interface SettingState {
  timezone: Timezone | undefined;
}

const initialState: SettingState = {
  timezone: undefined,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTimezone: (state, action: PayloadAction<Timezone>) => {
      state.timezone = action.payload;
    },
    loadPersistedSettingState: (_, action: PayloadAction<SettingState>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearUserInfo, () => initialState);
  },
});

export const { loadPersistedSettingState } = settingSlice.actions;

export default settingSlice.reducer;
