import _ from "lodash";
export const filterValue = (dataArr, searchWord, key) => {
  const regex = new RegExp(`\s(${searchWord})+|(${searchWord})+`, "im");
  let filtered = _.filter(dataArr, (item) => {
    return regex.test(item.name) || regex.test(item.paramValue);
  });
  return filtered;
};
