import axios from "axios";
import { getCookieToken } from "../util/settingSessions";
import { refreshTokenFunc } from "./loginApi";

const clientServer = axios.create({
  baseURL:
    "http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002",
  headers: { "Access-Control-Allow-Origin": "*" },
});
export default clientServer;

clientServer.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (
        error.response.data.msg === "Token has expired" ||
        error.response.data.msg === "Missing Authorization Header"
      ) {
        const originalRequest = config;
        const refreshToken = await getCookieToken();
        const access_token = await refreshTokenFunc(refreshToken);

        clientServer.defaults.headers.common.Authorization = `Bearer ${access_token}`;
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

// const SECRET_KEY = import.meta.env.VITE_SECRET_TOKEN;
const SECRET_KEY =
  "7eef25e8a3274b4b8b4a261bac872c963ce88c738a0e1d61ee5f639319d413ed";
// secret_key db에 저장?
export const stepPayServer = axios.create({
  baseURL: "https://api.steppay.kr/api",
  headers: {
    Accept: "*/*",
    "Secret-Token": `${SECRET_KEY}`,
  },
});

// export const retryAxios = () => {
// clientServer.interceptors.response.use(
//   undefined,

// (error) => {
// 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
// 응답 오류가 있는 작업 수행
// console.log("res error", error);

// if (error.config.url === "/news/search") {
//   const retryResponse = getSearchData(error.config.params);

//   return retryResponse;
// }

// if (error.config.maxBodyLength) {
//   getSearchData(error.config.params);
// }
// return Promise.reject(error);
// }
// );
// };

/*
export const retryAxios = (tryCount, timeInterval) => {
  const instance = axios.create({
    responseType: "json",
    headers: {
      "cntent-type": "application/json",
      // headers: { Authorization: `Bearer ${accessToken}` },
    },
  });

  const onFulfilled = (response) => {
    console.log("fulfil res", response);
    // if (error.config.url === "/auth/refresh") {
    //   return;
    // }
    // if (error.config.url === "/news/search") {
    //   retryNewsDatas = resConfig.data;
    // }
    return response;
  };

  const retry = (errConfig) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(instance.get(errConfig.url));
      }, timeInterval);
    });
  };

  const onRejected = (error) => {
    console.log("error config", error);

    if (error.config) {
      tryCount--;

      if (tryCount) {
        return retry(error.config);
      }
    }

    return Promise.reject(error);
  };

  instance.interceptors.response.use(onFulfilled, onRejected);

  console.log(
    "instance",
    instance.interceptors.response.use(onFulfilled, onRejected)
  );

  return instance;
};
*/

/*
// export let retryNewsDatas;
export const retryAxios = () => {
  const instance = axios.create({
    responseType: "json",
    headers: {
      "cntent-type": "application/json",
      // headers: { Authorization: `Bearer ${accessToken}` },
    },
  });

  instance.interceptors.response.use(
    async (resConfig) => {
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      console.log("resConfig", resConfig);

      // if (error.config.url === "/auth/refresh") {
      //   return;
      // }
      if (error.config.url === "/news/search") {
        return resConfig.data;
      }

      // resConfig.data
      // return resConfig;
      // return resConfig.data;
    },
    async (error) => {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      console.log("res error", error);

      if (error.config.url === "/news/search") {
        const retryResponse = getSearchData(error.config.params);

        return retryResponse;
      }

      // if (error.config.maxBodyLength) {
      //   getSearchData(error.config.params);
      // }
      return Promise.reject(error);
    }
  );

  return instance;
};
*/
// retryAxios(3, 1000);
