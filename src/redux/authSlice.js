import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    signOut: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user");
    },
  },
});
export const { setUser, setError, signOut } = authSlice.actions;
export default authSlice.reducer;
