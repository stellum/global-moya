import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchData } from "@api/searchApi";
import { retryAxios } from "@api/baseUrl";

const initialState = {
  timeFilter: "mth1",
  mediaType: "mp,op,r",
  language: "en",
  orderBy: "latest",
  keyType: "category",
  paramValue: "stocks",
  status: "Welcome",
};

const fetchSearchNews = createAsyncThunk(
  "searchFilterSlice/fetchSearchNews",
  async (queryParams) => {
    try {
      console.log("slice param", queryParams);
      const response = await getSearchData(queryParams);

      if (response === undefined) {
        retryAxios(3, 1000);
      }

      return response;
    } catch (error) {
      console.log("slice error", error);
    }
  }
);

const searchFilterSlice = createSlice({
  name: "searchFilterSlice",
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
  extraReducers: (builder) => {
    builder.addCase(fetchSearchNews.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(fetchSearchNews.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default searchFilterSlice.reducer;
export const { keywordContentRequest, loggedDefaultRequest } =
  searchFilterSlice.actions;
export { fetchSearchNews };
