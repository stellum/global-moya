// ! createSlice: reducer를 만드는 것을 도와준다.
import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  userData: {
    userEmail: "",
    userCode: null,
  },

  userLogin: false,
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      // ! 기존 방식과 다르게 return을 생략, spread operator 필요 없다.
      // state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.userLogin = true;
      state.userData.userEmail = action.payload.userEmail;
      state.userData.userCode = action.payload.userCode;
      // state.userData.userCode =
      //  state.commentList = action.payload.data;
      // state.commentList = action.payload;
      // state.loading = false;
    },
    userLogoutAction: (state) => {
      state.userLogin = false;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, userLogoutAction } =
  userSlice.actions;

export default userSlice.reducer;
