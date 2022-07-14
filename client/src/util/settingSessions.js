export const setCookie = (token) => {
  const expires = new Date();
  expires.setDate(expires.getMinutes() + 14);
  document.cookie = `accessToken=${token}; max-age=900`;
};

// export const getCookie = () => {
//   const accessToken = document.cookie;
//   accessToken
//     .split("; ")
//     .find((row) => row.startsWith("accessToken"))
//     .split("=")[1];
//   return accessToken;
// };

export const getCookie = () => {
  let key, value;
  let splitCookies = document.cookie.split(";");
  let accessToken;

  for (let i = 0; i < splitCookies.length; i++) {
    key = splitCookies[i].substring(0, splitCookies[i].indexOf("="));
    value = splitCookies[i].substring(splitCookies[i].indexOf("=") + 1);
    // 앞과 뒤의 공백 제거하기
    key = key.replace(/^\s+|\s+$/g, "");

    if (key === "accessToken") {
      accessToken = value;
    }
  }
  return accessToken;
};

export const deleteCookie = () => {
  // setCookie("accessToken");
};
