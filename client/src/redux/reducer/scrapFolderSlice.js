import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groupId: "",
  groupName: "",
  groupSeq: "",
  loading: true,
};
export const ScrapFolderSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    addScrapFolderAction: (state, action) => {
      state.keywordList = action.payload.reports;
    },
  },
});

export const { addScrapFolderAction } = ScrapFolderSlice.actions;

export default ScrapFolderSlice.reducer;
