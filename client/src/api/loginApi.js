import clientServer from "./baseUrl";
import { setCookie, getCookie, deleteCookie } from "../util/settingSessions";

export const loginFunc = async (form) => {
  try {
    const response = await clientServer({
      url: "/auth/login",
      method: "post",
      data: form,
    });
    // console.log(response);
    if (response.status === 200) {
      const { access_token } = response.data;
      setCookie(access_token);
      return response.status;
    }
  } catch (error) {
    if (error.response.status === 400) {
      return error.response.status;
    }
  }
};

export const logOutFunc = async () => {
  const accessToken = getCookie();
  try {
    const response = await clientServer({
      url: "auth/logout",
      method: "delete",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (response.status === 200) {
      deleteCookie();
    }
  } catch (e) {
    console.log(e);
  }
};
