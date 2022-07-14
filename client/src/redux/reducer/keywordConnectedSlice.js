import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchData } from "@api/searchApi";

// First, create the thunk
export const fetchSearchNews = createAsyncThunk(
  "keywordList/fetchSearchNews",
  async (queryParams, thunkAPI) => {
    // try {
    console.log("thunkAPI", thunkAPI);
    console.log("queryParams", queryParams);

    const response = await getSearchData(queryParams);
    console.log("response", response);
    // return response.data;
    // } catch (e) {
    // console.log("error", e);
    return thunkAPI.rejectWithValue("something went wrong");
    // }
  }
);

// https://www.youtube.com/watch?v=VQgliO57b40
// https://www.youtube.com/watch?v=lEG___eaMQU
// https://velog.io/@yeogenius/Redux-Toolkit-%EC%97%90%EC%84%9C-createAsyncThunk-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0
// https://github.com/reduxjs/redux-essentials-example-app/blob/tutorial-steps/src/features/posts/PostsList.js
// https://redux-toolkit.js.org/api/createAsyncThunk

const initialState = {
  keywordList: [],
  keyTypeList: [],
  paramValueList: [],
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
      state.keyTypeList = keyTypeList;
      state.paramValueList = paramValueList;
    },
  },
  extraReducers: {
    [fetchSearchNews.pending]: (state) => {
      console.log("pending:state", state);
    },
    [fetchSearchNews.fulfilled]: (state, action) => {
      console.log("fulfilled:state", state);
      console.log("fulfilled:action", action);
    },
    [fetchSearchNews.rejected]: (state, action) => {
      console.log("rejected:state", state);
      console.log("rejected:action", action);
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
  //     console.log("fetchSearchNews", fetchSearchNews);
  //     console.log("state", state);
  //     console.log("action", action);
  //     // Add user to the state array
  //     // state.entities.push(action.payload);
  //   });
  // },
});

export const { addKeywordListAction, mainKeywordContentRequest } =
  keywordConnectedSlice.actions;

export default keywordConnectedSlice.reducer;
