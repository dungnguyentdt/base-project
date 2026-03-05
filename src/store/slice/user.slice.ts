import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  validate2FaKey: string;
  // accessToken is intentionally excluded — it is stored in an httpOnly cookie
  // set by the backend and never exposed to JavaScript.
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<Partial<User>>) => {
      if (!state.user) {
        state.user = action.payload as User;
        return;
      }
      state.user = { ...state.user, ...action.payload };
    },
    clearUserInfo: (state) => {
      state.user = null;
      // The httpOnly access_token cookie is cleared by the backend on logout
      // (via Set-Cookie with Max-Age=0). No client-side cookie removal needed.
    },
    loadPersistedUserState: (_, action: PayloadAction<UserState>) => {
      const { user, ...rest } = action.payload;
      if (!user) {
        return action.payload;
      }
      const { provisioningUri, ...safeUser } = user as User & {
        provisioningUri?: string;
      };
      return { ...rest, user: safeUser as User };
    },
  },
});

export const { updateUserInfo, clearUserInfo, loadPersistedUserState } = userSlice.actions;
export default userSlice.reducer;
