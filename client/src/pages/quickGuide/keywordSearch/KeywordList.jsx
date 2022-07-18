import React, { memo, useState, useEffect, useCallback } from "react";
import MasterValueHook from "@hooks/MasterValueHook";
import {
  KeywordUL,
  HighLightLi,
  IconWrap,
  NoResults,
  ResultsUL,
  CategoryH4,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import _ from "lodash";
import { SearchIcon, StarIcon } from "@styles/svgIcon";
import Highlighter from "react-highlight-words";
import Spinner from "@components/common/Spinner";
import HightLightText from "@components/HightLightText";
import { colors } from "@styles/theme";
import { changeCase } from "@util/changeCase";
import AccessToken from "@hoc/AccessToken";
import { deleteKeywordFunc, createKeywordFunc } from "@util";
const KeywordList = ({
  keyword,
  accessToken,
  loading,
  setFilterId,
  filterId,
  clipKeyword,
  reports,
}) => {
  const { filteredResult, generateKey } = MasterValueHook(keyword);

  const [currentDetail, setCurDetail] = useState({});
  const [result, setResult] = useState(false);
  const checkKeyword = (reports, id, category) => {
    // console.log("reports", reports);
    // console.log("id", filteredResult);
    // console.log("category", category);
    // console.log("----");
    // if (reports.length === 0) return;
    const result = reports.some(
      (item) => item._id === id && item.keyType === category
    );
    // setResult(result);
    return result;
  };
  // useEffect(() => {}, []);
  const filterCate = useCallback(
    (_id, category) => {
      const filterCurrentCate = _.filter(filteredResult, {
        mainCate: category,
      });
      const res = _.filter(filterCurrentCate[0]?.filtered, { _id: _id });
      setCurDetail(...res);
    },
    [currentDetail]
  );

  const handleFillStar = useCallback(
    (_id, category, accessToken) => {
      setFilterId({ id: _id, category });

      filterCate(_id, category);
      if (checkKeyword(reports, _id, category)) {
        deleteKeywordFunc(_id, category, accessToken, reports);
      } else {
        createKeywordFunc(_id, category, accessToken);
      }
    },
    [filterId]
  );

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <KeywordUL>
          {filteredResult &&
            _.map(filteredResult, (item, index) => {
              return (
                <>
                  <HighLightLi key={generateKey(item.mainCate)}>
                    <CategoryH4>{changeCase(item.mainCate)}</CategoryH4>
                  </HighLightLi>

                  <ResultsUL>
                    {item.filtered.length > 0 ? (
                      _.map(item.filtered.slice(0, 20), (value, idx) => {
                        return (
                          <>
                            <HighLightLi key={generateKey(value._id + idx)}>
                              <IconWrap>
                                <SearchIcon />
                              </IconWrap>
                              <HightLightText>
                                <Highlighter
                                  textToHighlight={value.name}
                                  searchWords={[keyword]}
                                  highlightStyle={{
                                    color: `${colors.pointOrange200}`,
                                    backgroundColor: "transparent",
                                  }}
                                />
                              </HightLightText>
                              <IconWrap star>
                                <StarIcon
                                  id={value._id}
                                  onClick={() => {
                                    handleFillStar(
                                      value._id,
                                      item.mainCate,
                                      accessToken,
                                      idx
                                    );
                                  }}
                                  $clip={checkKeyword(
                                    reports,
                                    value._id,
                                    item.mainCate
                                  )}
                                />
                              </IconWrap>
                            </HighLightLi>
                          </>
                        );
                      })
                    ) : (
                      <HighLightLi>
                        <NoResults>검색 결과가 없습니다.</NoResults>
                      </HighLightLi>
                    )}
                  </ResultsUL>
                </>
              );
            })}
        </KeywordUL>
      )}
    </>
  );
};

export default AccessToken(memo(KeywordList));
