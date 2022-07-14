// ! createSlice: reducer를 만드는 것을 도와준다.
import { createSlice } from "@reduxjs/toolkit";

const accessToken = document.cookie
  .split("; ")
  .find((row) => row.startsWith("accessToken"));

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
    fetchUserLogin: (state, action) => {
      // console.log(action.payload);
      // state.userLogin = accessToken === undefined ? false : true;
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

export const { fetchUserLogin, fetchUserSuccess, userLogoutAction } =
  userSlice.actions;

export default userSlice.reducer;
