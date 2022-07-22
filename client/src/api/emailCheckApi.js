import clientServer from "./baseUrl";

export const emailCheckFunc = async (data) => {
  await clientServer({
    url: "/auth/checkEmail",
    method: "post",
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.data.result === 0) {
        return 0;
      } else {
        return 1;
      }
    })
    .catch((err) => console.log(err));
  // try {
  //   const res = await clientServer({
  //     url: "/auth/checkEmail",
  //     method: "post",
  //     data: data,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (res.status === 200) {
  //     console.log(res);
  //     return res.data.result;
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
};
