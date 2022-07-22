import clientServer from "./baseUrl";

export const getSearchData = async (queryParams) => {
  console.log(queryParams);
  const {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType,
    paramValue,
    exchange,
    nextPageToken,
  } = queryParams;

  // axiosRetry(clientServer, { retries: 3 });
  // clientServer
  //   .get("/news/search") // The first request fails and the second returns 'ok'
  //   .then((result) => {
  //     console.log("result나다", result);
  //     result.data; // 'ok'
  //   });

  try {
    const response = await clientServer({
      url: "/news/search",
      // timeout: 3000,
      params: {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType,
        paramValue,
        exchange,
        nextPageToken,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
    if (response.status === 400) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 401) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 2002) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 4018) {
      const message = await response.data.message;
      return message;
    }
  } catch (e) {
    console.log("error res", e);

    // if (err.response.status !== 200) {
    //   throw new Error(
    //     `API call failed with status code: ${err.response.status} after 3 retry attempts`
    //   );
    // }

    // if (e.config.url === "/news/search") {
    //   console.log("에러여기");

    //   const token = e.config.headers.Authorization.split(" ")[1];
    //   getSearchData(e.config.params, token);
    // }

    // if (response === undefined) {
    //   console.log("retry axios 실행");
    //   retryAxios(3, 2000);
    // }

    // if (e.response.status === 400) {
    return e.response;
    // }
  }
};

/*
axiosRetry(clientServer, {
  retries: 3, // number of retries
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000; // time interval between retries
  },
  retryCondition: (error) => {
    console.log("retry errro", error);
    // if retry condition is not specified, by default idempotent requests are retried
    // if (error.config.data === undefined) {
    //   const token = e.config.headers.Authorization.split(" ")[1];
    //   getSearchData(e.config.params, token);
    // }
    // return error.response.status === 503;
  },
});

// // Allows request-specific configuration
// clientServer
//   .get("/test", {
//     "axios-retry": {
//       retries: 0,
//     },
//   })
//   .catch((error) => {
//     // The first request fails
//     error !== undefined;
//   });
*/
