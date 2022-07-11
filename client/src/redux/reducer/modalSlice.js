import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBtn: false,
  showSideNavi: false,
  showModal: { view: false, sort: false },
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleBtnAction: (state, action) => {
      state.showBtn = action.payload;
    },
    toggleModalAction: (state, action) => {
      switch (action.payload) {
        case "view":
          return {
            ...state,
            showModal: { view: true, sort: false },
          };
        case "sort":
          return {
            ...state,
            showModal: { view: false, sort: true },
          };
        default:
          return {
            ...state,
            showModal: { view: false, sort: false },
          };
      }
    },
    toggleNavigation: (state, action) => {
      console.log(action);
      state.showSideNavi = action.payload;
    },
  },
});

export const { toggleBtnAction, toggleModalAction, toggleNavigation } =
  modalSlice.actions;

export default modalSlice.reducer;
