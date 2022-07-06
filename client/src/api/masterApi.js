import clientServer from "./baseUrl";

const getMasterData = async () => {
  try {
    const response = await clientServer({
      url: "/master/all",
    });
    if (response.status === 200) {
      const data = await response.data;
      console.log(data);
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export default getMasterData;
