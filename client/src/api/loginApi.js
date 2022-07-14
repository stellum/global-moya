import clientServer from "./baseUrl";
// import { setCookie, getCookie, deleteCookie } from "../util/settingSessions";

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
      return error.response.status;
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
  } catch (e) {
    console.log(e);
  }
};

export const refreshTokenFunc = async (refreshToken) => {
  // const refreshToken = getCookie();
  try {
    const response = await clientServer({
      url: "/auth/refresh",
      method: "POST",
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
  } catch (err) {
    console.log(err);
  }
};
