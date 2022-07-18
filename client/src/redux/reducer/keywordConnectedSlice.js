import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keywordList: [],
  keyTypeList: [],
  paramValueList: [],
  keywordNameList: [],
};

const keywordConnectedSlice = createSlice({
  name: "keywordList",
  initialState,
  reducers: {
    addKeywordListAction: (state, action) => {
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

      state.keyTypeList = keyTypeList;
      state.paramValueList = paramValueList;
      state.keywordNameList = keywordNameList;
    },
  },
});

export const { addKeywordListAction } = keywordConnectedSlice.actions;

export default keywordConnectedSlice.reducer;
