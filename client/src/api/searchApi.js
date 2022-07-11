import clientServer from "./baseUrl";
import { getCookie } from "../util/settingSessions";

export const getSearchData = async (queryParams) => {
  const accessToken = getCookie();
  const { timeFilter, mediaType, language, orderBy, keyType, paramValue } =
    queryParams;

  try {
    const response = await clientServer({
      url: "/search/news",
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType,
        paramValue,
      },
    });
    if (response.status === 200) {
      const data = await response.data;

      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
