import _ from "lodash";
export const filterValue = (dataArr, searchWord) => {
  const regex = new RegExp(`\s(${searchWord})+|(${searchWord})+`, "im");
  let filtered = _.filter(dataArr, (item) => {
    return regex.test(item.name) || regex.test(item.paramValue);
  });
  return filtered;
};

export const checkClip = (list, id, keyType) => {
  // console.log("list", list);
  // console.log("id", id._id);
  // console.log("keytype", keyType);

  const result = list
    .filter((reports) => reports.keyType === keyType)
    .some((value) => value._id === id._id);
  console.log(result);
  return result;
};
export default checkClip;
