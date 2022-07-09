import React, { useState, useEffect } from "react";
import { SearchIcon } from "@styles/svgIcon";
import {
  KeywordLi,
  KeywordH4,
  KeywordUL,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import Spinner from "@components/common/Spinner";
import _ from "lodash";
const LvKeywordList = ({ dataList, myRef, page, loading }) => {
  const [sliceValue, setSliceValue] = useState({ minValue: 0, maxValue: 100 });
  // console.log(loading);
  useEffect(() => {
    setSliceValue((prev) => ({
      minValue: prev.maxValue,
      maxValue: prev.maxValue + 100,
    }));
  }, [page]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <KeywordUL>
          {dataList &&
            _.map(
              dataList.slice(
                0,
                dataList.length > 100 ? sliceValue.maxValue : dataList.length
              ),
              (item, idx) => {
                if (item.length === idx + 1) {
                  return (
                    <KeywordLi ref={myRef} key={item._id}>
                      <SearchIcon />
                      <KeywordH4>
                        {item.name} ({item.paramValue})
                      </KeywordH4>
                    </KeywordLi>
                  );
                } else {
                  return (
                    <KeywordLi ref={myRef} key={item._id}>
                      <SearchIcon />
                      <KeywordH4>
                        {item.name} ({item.paramValue})
                      </KeywordH4>
                    </KeywordLi>
                  );
                }
              }
            )}
        </KeywordUL>
      )}
    </>
  );
};

export default LvKeywordList;
