import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    firstName: "",
    lastName: "",
    phonenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setPhonenumber: (state, action) => {
      state.phonenumber = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setUserData: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setPhonenumber,
  setEmail,
  setPassword,
  setConfirmPassword,
  setUserData,
} = userDataSlice.actions;

export default userDataSlice.reducer;