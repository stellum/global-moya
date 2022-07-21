import clientServer from "./baseUrl";
// import { retryAxios } from "@api/baseUrl";

export const getKeywords = async (accessToken) => {
  try {
    const response = await clientServer({
      url: "preferTerms/reports",
      headers: { Authorization: `Bearer ${accessToken}` },
      transformResponse: [
        function (data) {
          const transformedData = JSON.parse(data);
          // console.log("transformedData", transformedData);
          return transformedData.reports.map((item, id) => {
            item.id = id;
            return item;
          });
        },
      ],
      timeout: 3000,
      // withCredentials: true,
    });

    // if (response === undefined) {
    //   retryAxios(3, 1000);
    // }

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);

    // if (e.config.url === "/preferTerms/reports") {
    //   console.log("에러여기");

    //   // const token = e.config.headers.Authorization.split(" ")[1];
    //   getKeywords(accessToken);
    // }
  }
};

/**
 * 키워드 생성 처리 단계 중 발생될 수 있는 예외코드**
클라이언트 요청 자체를 잘못했을경우 (오타, 잘못된 데이터바인딩 등등) = 401
유져벌로 키워드 생성 제한 예외 코드 = 2002
유저가 이미 생성된 키워드를 등록할 경우 = 4018
 */

export const createKeywords = async (json, accessToken) => {
  try {
    const response = await clientServer({
      url: "preferTerms/create",
      method: "post",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: JSON.stringify(json),
    });
    // console.log(response);
    if (response.status === 200) {
      // console.log(data);
      return response;
    }
    if (response.status === 400) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 401) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 2002) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 4018) {
      const message = await response.data.message;
      return message;
    }
  } catch (e) {
    // 401, 2002, 4018 에러처리 필요
    console.log(e);
    return e.response.data;
  }
};

// updateFlag
// "termList" : keyType, _id, termSeq, updateFlag: R: Remove, S: Seq, D: Default
// 순서변경, 삭제 한꺼번에 처리 가능
// ! mutiple update / delete
export const updateListKeywords = async (json, accessToken) => {
  try {
    const response = await clientServer({
      url: "preferTerms/updateList",
      method: "post",
      headers: { Authorization: `Bearer ${accessToken}` },
      data: json,
    });
    if (response.status === 200) {
      const data = await response.data;

      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

// ! update 1개
export const updateKeywords = async (json, accessToken) => {
  try {
    const response = await clientServer({
      url: "preferTerms/updateSeq",
      method: "put",
      headers: { Authorization: `Bearer ${accessToken}` },
      data: json,
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

// ! delete 1개
export const deleteKeywords = async (json, accessToken) => {
  try {
    const response = await clientServer({
      url: "preferTerms/delete",
      method: "delete",
      headers: { Authorization: `Bearer ${accessToken}` },
      data: json,
    });
    if (response.status === 200) {
      const data = await response.data;
      console.log("deleted", data);
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
