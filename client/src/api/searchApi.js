import clientServer from "./baseUrl";
import { getCookie } from "../util/settingSessions";

export const getSearchData = async (queryParams) => {
  const accessToken = getCookie();
  const { timeFilter, mediaType, language, orderBy, keyType, paramValue } =
    queryParams;

  console.log("queryParams", queryParams);

  try {
    const response = await clientServer({
      url: "/news/search",
      headers: { Authorization: `Bearer ${accessToken}` },
      timeout: 4000,
      params: {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType,
        paramValue,
      },
      // withCredentials: true,
    });
    if (response.status === 200) {
      const data = await response.data;

      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
