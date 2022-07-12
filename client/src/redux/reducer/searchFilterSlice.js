import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  timeFilter: "mth1",
  mediaType: "mp,op,r",
  language: "en",
  orderBy: "latest",
  keyType: "category",
  paramValue: "stocks",
};

export const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    keywordContentRequest: (state, action) => {
      state.keyType = action.payload[0];
      state.paramValue = action.payload[1];
    },
    loggedDefaultRequest: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      // state.keyType = action.payload;
      // state.paramValue = action.payload;
    },
    // changeFilterRequest: (state, action) => {
    //   state.timeFilter = action.payload;
    //   state.mediaType = action.payload;
    //   state.orderBy = action.payload;
    // }
  },
});

export const { keywordContentRequest, loggedDefaultRequest } =
  searchFilterSlice.actions;

export default searchFilterSlice.reducer;
