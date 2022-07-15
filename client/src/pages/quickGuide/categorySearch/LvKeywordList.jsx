import React, { useState, useEffect, memo } from "react";
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
import AccessToken from "@hoc/AccessToken";
import { checkClip } from "@util/filterMasterFunc";
import { deleteKeywordFunc, createKeywordFunc } from "@util";
const LvKeywordList = ({
  dataList,
  myRef,
  page,
  loading,
  category,
  reports,
  accessToken,
  setFillStar,
}) => {
  const [sliceValue, setSliceValue] = useState({ minValue: 0, maxValue: 100 });
  // console.log(reports);
  useEffect(() => {
    setSliceValue((prev) => ({
      minValue: prev.maxValue,
      maxValue: prev.maxValue + 100,
    }));
  }, [page]);

  const handleFillStar = (item, category, accessToken, reports) => {
    setFillStar((prev) => !prev);
    if (checkClip(reports, item, category)) {
      deleteKeywordFunc(item, category, accessToken, reports);
    } else {
      createKeywordFunc(item, category, accessToken);
    }
  };
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
                        onClick={() => {
                          handleFillStar(item, category, accessToken, reports);
                        }}
                        $clip={checkClip(reports, item, category)}
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
                          onClick={() => {
                            handleFillStar(
                              item,
                              category,
                              accessToken,
                              reports
                            );
                          }}
                          $clip={checkClip(reports, item, category)}
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

export default AccessToken(memo(LvKeywordList));
