import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lvCategory: {},
  masterData: {},
  keyword: "",
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
    searchKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { addLvCateAction, addDataAction, searchKeyword } =
  categorySlice.actions;

export default categorySlice.reducer;
