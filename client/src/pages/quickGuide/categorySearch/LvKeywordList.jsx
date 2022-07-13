import React, { useState, useEffect, memo, useCallback } from "react";
import { SearchIcon, StarIcon } from "@styles/svgIcon";
import {
  KeywordLi,
  KeywordH4,
  KeywordUL,
  KeywordWrap,
  IconWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import Spinner from "@components/common/Spinner";
import _ from "lodash";
import { getKeywords, createKeywords } from "@api/keywordListApi";
import { useSelector } from "react-redux";
const LvKeywordList = ({ dataList, myRef, page, loading, category }) => {
  const [sliceValue, setSliceValue] = useState({ minValue: 0, maxValue: 100 });
  const [hasKeyword, setHasKeyword] = useState([]);
  const keywordList = useSelector(
    (state) => state.keywordListSlice.keywordList
  );
  // console.log(keywordList);

  useEffect(() => {
    setSliceValue((prev) => ({
      minValue: prev.maxValue,
      maxValue: prev.maxValue + 100,
    }));
  }, [page]);

  useEffect(() => {
    setHasKeyword(keywordList.filter((item) => item.keyType === category));
    // console.log(keywordList);
  }, [category]);

  const checkClip = (list, id) => {
    const result = list.some((item) => item._id === id);
    console.log(result);
    return result;
  };

  const createKeywordFunc = async (id, category) => {
    const data = {
      keyType: category,
      _id: id.toString(),
      termSeq: "z",
    };

    const res = await createKeywords(data);
    console.log(res);
  };

  /* 
    1. 등록된 키워드 리스트를 불러온다 -> keyType 과 category 비교
    2. 등록된 키워드 리스트 id와 뿌려지는 id 가 같으면 별에 색을 채운다
    3. ??
  
  */
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
                      <KeywordWrap>
                        <KeywordH4>
                          {item.name} ({item.paramValue})
                        </KeywordH4>
                      </KeywordWrap>
                      <StarIcon
                        onClick={() => createKeywordFunc(item)}
                        $clip={checkClip(hasKeyword, item._id)}
                      />
                    </KeywordLi>
                  );
                } else {
                  return (
                    <KeywordLi ref={myRef} key={item._id}>
                      <IconWrap>
                        <SearchIcon />
                      </IconWrap>
                      <KeywordWrap>
                        <KeywordH4>
                          {item.name} ({item.paramValue})
                        </KeywordH4>
                      </KeywordWrap>
                      <IconWrap star>
                        <StarIcon
                          onClick={() => createKeywordFunc(item._id, category)}
                          $clip={checkClip(hasKeyword, item._id)}
                        />
                      </IconWrap>
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

export default memo(LvKeywordList);
