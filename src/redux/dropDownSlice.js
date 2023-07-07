import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState: "",
  reducers: {
    setSelectedOption: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedOption } = dropDownSlice.actions;
export default dropDownSlice.reducer;
