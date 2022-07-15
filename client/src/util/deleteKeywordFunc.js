import { deleteKeywords } from "../api/keywordListApi";
const deleteKeywordFunc = async (item, category, accessToken, clipKeyword) => {
  const data = {
    keyType: category,
    _id: item._id.toString(),
    termSeq: clipKeyword.find(
      (clip) => clip._id === item._id && clip.keyType === category
    ).termSeq,
  };
  const res = await deleteKeywords(data, accessToken);
  console.log(res);
};
export default deleteKeywordFunc;
