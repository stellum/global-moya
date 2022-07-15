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
import { checkClip, deleteKeywordFunc, createKeywordFunc } from "@util";
const KeywordList = ({
  keyword,
  accessToken,
  reports,
  loading,
  setCheckTrue,
  checkTrue,
}) => {
  const { filteredResult, generateKey } = MasterValueHook(keyword);
  const [filterId, setFilterId] = useState({});

  const curValue = (_id, category) => {
    const filterCategory = _.filter(
      filteredResult,
      (item) => item.mainCate === category
    );

    const filteredId = _.map(filterCategory, (item) =>
      _.find(item.filtered, (item) => item._id === _id)
    );
    setFilterId(...filteredId);
  };

  const handleFillStar = async (_id, category, accessToken, value) => {
    curValue(_id, category);

    setCheckTrue(checkClip(reports, filterId, category));
    console.log(checkClip(reports, filterId, category));
    if (checkClip(reports, filterId, category)) {
      // deleteKeywordFunc(value, category, accessToken, reports);
    } else {
      // createKeywordFunc(value, category, accessToken);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <KeywordUL>
          {filteredResult &&
            _.map(filteredResult, (item) => {
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
                                  onClick={() => {
                                    handleFillStar(
                                      value._id,
                                      item.mainCate,
                                      accessToken,
                                      value
                                    );
                                  }}
                                  $clip={checkClip(
                                    reports,
                                    value,
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
