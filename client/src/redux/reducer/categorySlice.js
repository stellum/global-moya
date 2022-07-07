import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lvCategory: {},
  masterData: {},
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addLvCateAction: (state, action) => {
      state.lvCategory = action.payload;
    },
    addDataAction: (state, action) => {
      // console.log(action.payload);
      state.masterData = action.payload;
    },
  },
});

export const { addLvCateAction, addDataAction } = categorySlice.actions;

export default categorySlice.reducer;
