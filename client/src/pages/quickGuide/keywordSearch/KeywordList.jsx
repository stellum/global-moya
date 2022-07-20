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
import { deleteKeywordFunc, createKeywordFunc } from "@util";
import AddKeywordModal from "@components/addKeywordModal/AddKeywordModal";
const KeywordList = ({
  keyword,
  accessToken,
  loading,
  setFilterId,
  filterId,
  reports,
  setResult,
  reportsLength,
}) => {
  const { filteredResult, generateKey } = MasterValueHook(keyword);
  const [resultMsg, setResultMsg] = useState(false);

  const checkKeyword = (reports, id, category) => {
    const result = reports.some(
      (item) => item._id === id && item.keyType === category
    );
    return result;
  };

  useEffect(() => {
    setResult(false);
    const msgTimeOut = setTimeout(() => {
      setResultMsg(false);
    }, 2000);
    return () => {
      clearTimeout(msgTimeOut);
    };
  }, [reports]);

  const handleFillStar = useCallback(
    async (_id, category, accessToken) => {
      setFilterId({ id: _id, category });
      if (checkKeyword(reports, _id, category)) {
        const res = await deleteKeywordFunc(
          _id,
          category,
          accessToken,
          reports
        );
        setResult(true);
      } else if (reportsLength < 10) {
        const res = await createKeywordFunc(_id, category, accessToken);
        console.log(res);
        setResult(true);
        setResultMsg(true);
      }
    },
    [filterId, reports]
  );

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AddKeywordModal
            resultMsg={resultMsg}
            reportsLength={reportsLength}
          />
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
                                <HightLightText
                                  paramValue={value.paramValue}
                                  category={item.mainCate}
                                  exchange={value.exchange}
                                >
                                  <Highlighter
                                    textToHighlight={value.name}
                                    searchWords={[keyword]}
                                    highlightStyle={{
                                      color: `${colors.pointOrange200}`,
                                      backgroundColor: "transparent",
                                    }}
                                  />{" "}
                                  (
                                  <Highlighter
                                    textToHighlight={value.paramValue}
                                    searchWords={[keyword]}
                                    highlightStyle={{
                                      color: `${colors.pointOrange200}`,
                                      backgroundColor: "transparent",
                                    }}
                                  />
                                  )
                                </HightLightText>
                                <IconWrap star>
                                  <StarIcon
                                    id={value._id}
                                    onClick={() => {
                                      handleFillStar(
                                        value._id,
                                        item.mainCate,
                                        accessToken
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
        </>
      )}
    </>
  );
};

export default memo(KeywordList);
