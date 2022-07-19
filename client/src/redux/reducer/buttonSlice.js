import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showEditBtn: false,
  showDelBtn: false,
  checkedBtn: [],
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    toggleEditAction: (state, action) => {
      console.log(action);
      state.showEditBtn = action.payload;
    },
    showDelBtnAction: (state, action) => {
      state.showDelBtn = action.payload;
    },
    addCheckedBtn: (state, action) => {
      state.checkedBtn.push(action.payload);
    },
    delCheckedBtn: (state, action) => {
      state.checkedBtn.pop(action.payload);
    },
    initCheckedAction: (state) => {
      state.showDelBtn = initialState.showDelBtn;
      state.checkedBtn = initialState.checkedBtn;
    },
  },
});

export const {
  toggleEditAction,
  showDelBtnAction,
  addCheckedBtn,
  delCheckedBtn,
  initCheckedAction,
} = buttonSlice.actions;

export default buttonSlice.reducer;
