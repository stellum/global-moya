import clientServer from "./baseUrl";

export const getSearchData = async (queryParams, accessToken) => {
  const {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType,
    paramValue,
    exchange,
  } = queryParams;

  try {
    const response = await clientServer({
      url: "/news/search",
      headers: { Authorization: `Bearer ${accessToken}` },
      timeout: 3000,
      params: {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType,
        paramValue,
        exchange,
      },
      // withCredentials: true,
    });
    // console.log(response);
    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (e) {
    if (e.response.status === 400) {
      return e.response;
    }
  }
};
