import clientServer from "./baseUrl";

export const translateApi = async (newsId) => {
  try {
    const response = await clientServer({
      url: "/news/translate",
      method: "GET",
      params: { newsId },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};
