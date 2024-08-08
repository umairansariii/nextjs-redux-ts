import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
  } | null;
  token: string;
  refreshToken: string;
}

const initialState = {
  user: null,
  token: "",
  refreshToken: "",
} satisfies AuthState as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<AuthState>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    signOut(state) {
      state.user = null;
      state.token = "";
      state.refreshToken = "";
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
