import clientServer from "./baseUrl";

export const registerFunc = async (form) => {
  try {
    const res = await clientServer({
      url: "/auth/register",
      method: "post",
      data: form,
    });

    if (res.status === 200) {
      console.log("회원가입 성공");
      return res.status;
    }
  } catch (err) {
    return res.status;
  }
};
