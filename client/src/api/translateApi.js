import clientServer from "./baseUrl";

export const translateApi = async (newsId, accessToken) => {
  try {
    const response = await clientServer({
      url: "/news/translate",
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { newsId },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};
