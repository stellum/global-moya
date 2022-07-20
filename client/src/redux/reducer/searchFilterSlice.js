import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchData } from "@api/searchApi";

const initialState = {
  timeFilter: "mth1",
  mediaType: "mp,op,r",
  language: "en",
  orderBy: "latest",
  keyType: "category",
  paramValue: "stocks",
  exchange: null,
  status: "Welcome",
  code: null,
};

const fetchSearchNews = createAsyncThunk(
  "searchFilterSlice/fetchSearchNews",
  async (params, thunkAPI) => {
    let { queryParams, accessToken } = params;
    console.log(queryParams);
    try {
      const response = await getSearchData(queryParams, accessToken);
      console.log(response);
      // if (response.stauts === 400) {
      //   return response.status;
      // }
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
      console.log(action.payload);
      state.keyType = action.payload[0];
      state.paramValue = action.payload[1];
      state.exchange = action.payload[2];
    },
    changeFilterRequest: (state, action) => {
      console.log(action);
      const { payload } = action;
      state.timeFilter = payload.timeFilter;
      state.mediaType = payload.mediaType;
      state.orderBy = payload.orderBy;
    },
    changeLanguageRequest: (state, action) => {
      // state.language;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchNews.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
      // state.code = action.payload.data?.code;
      state.value = action.payload;
      state.status = "complete";
    });
    builder.addCase(fetchSearchNews.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default searchFilterSlice.reducer;
export const {
  keywordContentRequest,
  changeFilterRequest,
  changeLanguageRequest,
} = searchFilterSlice.actions;
export { fetchSearchNews };
