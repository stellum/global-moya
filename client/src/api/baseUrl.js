import axios from "axios";

const clientServer = axios.create({
  baseURL:
    "http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002",
});
export default clientServer;

const axiosPrivate = axios.create({
  baseURL:
    "http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const SECRET_KEY = import.meta.env.VITE_SECRET_TOKEN;
// secret_key db에 저장?
export const stepPayServer = axios.create({
  baseURL: "https://api.steppay.kr/api",
  headers: {
    Accept: "*/*",
    "Secret-Token": `${SECRET_KEY}`,
  },
});

// Intercepter
// clientServer.interceptors.request.use(
//   async (reqConfig) => {
//     console.log("Intercepter", reqConfig);

//     return reqConfig;
//   },
//   async (error) => {
//     // 요청 오류가 있는 작업 수행
//     console.log("req error", error);
//     return Promise.reject(error);
//   }
// );

// clientServer.interceptors.response.use(
//   async (resConfig) => {
//     // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 데이터가 있는 작업 수행
//     console.log("resConfig", resConfig);

//     if (error.config.url === "/news/search") {
//       retryNewsDatas = resConfig.data;
//     }

//     // resConfig.data
//     return resConfig;
//     // return resConfig.data;
//   },
//   async (error) => {
//     // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 오류가 있는 작업 수행
//     console.log("res error", error);

//     if (error.config.url === "/news/search") {
//       const retryResponse = getSearchData(error.config.params);

//       return retryResponse;
//     }

//     // if (error.config.maxBodyLength) {
//     //   getSearchData(error.config.params);
//     // }
//     return Promise.reject(error);
//   }
// );

import { getCookie } from "../util/settingSessions";

export const retryAxios = (tryCount, timeInterval) => {
  const accessToken = getCookie();
  const instance = axios.create({
    // baseURL:
    //   "http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  });

  const onFulfilled = (response) => {
    console.log("ful res", response);
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

  return instance;
};

// retryAxios(3, 1000);
