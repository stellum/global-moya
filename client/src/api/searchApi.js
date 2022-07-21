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
    } else if (
      response.status === 400 ||
      response.data.code === 401 ||
      response.data.code === 2002 ||
      response.data.code === 4018
    ) {
      const message = await response.data.message;
      return message;
    } else {
      console.log("etc message", response.data.message);
      // return;
    }
  } catch (e) {
    console.log("error res", e);
  }
};
