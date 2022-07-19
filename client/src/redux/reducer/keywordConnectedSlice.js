import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keywordList: [],
  keyTypeList: [],
  paramValueList: [],
  keywordNameList: [],
  exchangeList: [],
};

const keywordConnectedSlice = createSlice({
  name: "keywordList",
  initialState,
  reducers: {
    addKeywordListAction: (state, action) => {
      console.log(action.payload);
      state.keywordList = action.payload;

      const keyTypeList = action.payload.map((obj) => {
        return obj.keyType;
      });
      const paramValueList = action.payload.map((obj) => {
        return obj.paramValue;
      });
      const keywordNameList = action.payload.map((obj) => {
        return { id: obj.index, keyword: obj.name };
      });
      const exchangeList = action.payload.map((obj) => {
        return obj.exchange;
      });
      state.keyTypeList = keyTypeList;
      state.paramValueList = paramValueList;
      state.keywordNameList = keywordNameList;
      state.exchangeList = exchangeList;
    },
  },
});

export const { addKeywordListAction } = keywordConnectedSlice.actions;

export default keywordConnectedSlice.reducer;
