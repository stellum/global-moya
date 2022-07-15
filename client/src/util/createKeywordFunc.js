import { createKeywords } from "../api/keywordListApi";
const createKeywordFunc = async (item, category, accessToken) => {
  const data = {
    keyType: category,
    _id: item._id.toString(),
    termSeq: "z", // 생성 된 문자열로 넣어야 함
  };

  const res = await createKeywords(data, accessToken);
  console.log(res);
};
export default createKeywordFunc;
