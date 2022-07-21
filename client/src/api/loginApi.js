import clientServer from "./baseUrl";
import { removeCookieToken } from "../util/settingSessions";
export const loginFunc = async (form) => {
  try {
    const response = await clientServer({
      url: "/auth/login",
      method: "post",
      data: form,
    });

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    if (error.response.status === 400) {
      let errMsg = error.response.data.message;
      return errMsg;
    }
  }
};

export const logOutFunc = async (accessToken) => {
  try {
    const response = await clientServer({
      url: "auth/logout",
      method: "delete",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (response.status === 200) {
      removeCookieToken();
    }
  } catch (e) {
    console.log(e);
  }
};

export const refreshTokenFunc = async (refreshToken) => {
  try {
    const response = await clientServer({
      url: "/auth/refresh",
      method: "POST",
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    if (response.status === 200) {
      return response.data.access_token;
    }
  } catch (err) {
    console.log(err);
  }
};
