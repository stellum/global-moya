import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showScrapCheckBtn: false,
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const ScrapCheckSlice = createSlice({
  name: "scrapCheck",
  initialState,
  reducers: {
    togglenNewsCheckBtn: (state, action) => {
      state.showScrapCheckBtn = action.payload;
    },
  },
});

export const { togglenNewsCheckBtn } = ScrapCheckSlice.actions;

export default ScrapCheckSlice.reducer;
