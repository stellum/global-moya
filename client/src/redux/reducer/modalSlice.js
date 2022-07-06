import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  showSideNavi: false,
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModalAction: (state, action) => {
      state.showModal = action.payload;
    },
    toggleNavigation: (state, action) => {
      state.showSideNavi = action.payload;
    },
  },
});

export const { toggleModalAction, toggleNavigation } = modalSlice.actions;

export default modalSlice.reducer;
