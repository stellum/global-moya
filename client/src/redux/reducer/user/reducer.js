// ! createSlice: reducer를 만드는 것을 도와준다.
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: {},
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      // ! 기존 방식과 다르게 return을 생략, spread operator 필요 없다.
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      // state.commentList = action.payload.data;
      state.commentList = action.payload;
      state.loading = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
