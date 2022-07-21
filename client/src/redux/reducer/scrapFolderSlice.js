import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groupName: "",
};
export const scrapFolderSlice = createSlice({
  name: "groupName",
  initialState,
  reducers: {
    scrapFolderChoose: (state, action) => {
      state.groupName = action.payload;
    },
  },
});

export const { scrapFolderChoose } = scrapFolderSlice.actions;

export default scrapFolderSlice.reducer;
