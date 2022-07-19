import { deleteKeywords } from "../api/keywordListApi";
const deleteKeywordFunc = async (id, category, accessToken, clipKeyword) => {
  const data = {
    keyType: category,
    _id: id.toString(),
    termSeq: clipKeyword.find(
      (item) => item._id === id && item.keyType === category
    ).termSeq,
  };
  const res = await deleteKeywords(data, accessToken);
  return res;
};
export default deleteKeywordFunc;
