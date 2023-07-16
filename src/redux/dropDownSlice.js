import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState: {
    selectedOption: null,
    selectedTime: null,
    selectedDiners: null,
    selectedOccasion: null,
    radioButtonSelection: null,
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload; 
    },
    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },
    setSelectedDiners: (state, action) => {
      state.selectedDiners = action.payload;
    },
    setSelectedOccasion: (state, action) => {
      state.selectedOccasion = action.payload;
    },
    setRadioButtonSelection: (state, action) => {
      state.radioButtonSelection = action.payload;
    },
  },
});

export const {
  setSelectedOption,
  setRadioButtonSelection,
  setSelectedTime,
  setSelectedDiners,
  setSelectedOccasion,
} = dropDownSlice.actions;
export default dropDownSlice.reducer;
