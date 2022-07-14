import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showEditBtn: false,
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const keywordModalSlice = createSlice({
  name: "keywordModal",
  initialState,
  reducers: {
    toggleEditBtnAction: (state, action) => {
      state.showEditBtn = action.payload;
    },
  },
});

export const { toggleEditBtnAction } = keywordModalSlice.actions;

export default keywordModalSlice.reducer;
