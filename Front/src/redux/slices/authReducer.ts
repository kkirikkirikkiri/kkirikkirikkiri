import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

interface AuthState {
  isSigned: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isSigned: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsSigned: (state, action: PayloadAction<boolean>) => {
      state.isSigned = action.payload;
    },
  },
});

export const { setIsSigned } = authSlice.actions;
export const getIsSigned = (state: RootState) => state.auth.isSigned;

export default authSlice.reducer;
