import clientServer from "./baseUrl";

export const emailCheckFunc = async (data) => {
  try {
    const res = await clientServer({
      url: "/auth/checkEmail",
      method: "post",
      data: data,
    });

    if (res.status === 200) {
      console.log("이메일");
      return res.status;
    }
  } catch (err) {
    console.log(err);
    return res.status;
  }
};
