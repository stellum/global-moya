import React, { useState, useEffect } from "react";
import { SearchIcon } from "@styles/svgIcon";
import {
  KeywordLi,
  KeywordH4,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
const LvKeywordList = ({ dataList, myRef, page }) => {
  const [sliceValue, setSliceValue] = useState({ minValue: 0, maxValue: 100 });

  useEffect(() => {
    setSliceValue((prev) => ({
      minValue: prev.maxValue,
      maxValue: prev.maxValue + 100,
    }));
  }, [page]);
  return (
    <ul>
      {dataList &&
        dataList
          .slice(
            0,
            dataList.length > 100 ? sliceValue.maxValue : dataList.length
          )
          .map((item, idx) => {
            if (item.length === idx + 1) {
              return (
                <KeywordLi ref={myRef} key={item._id}>
                  <SearchIcon />
                  <KeywordH4>{item.name}</KeywordH4>
                </KeywordLi>
              );
            } else {
              return (
                <KeywordLi ref={myRef} key={item._id}>
                  <SearchIcon />
                  <KeywordH4>{item.name}</KeywordH4>
                </KeywordLi>
              );
            }
          })}
    </ul>
  );
};

export default LvKeywordList;
