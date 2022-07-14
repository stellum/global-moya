import React, { memo } from "react";
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
import HightLightText from "@components/HightLightText";
import { colors } from "@styles/theme";
import { changeCase } from "@util/changeCase";
import { getKeywords } from "../../../api/keywordListApi";
const KeywordList = ({ keyword, updateSearchInput }) => {
  const { filteredResult, generateKey } = MasterValueHook(keyword);
  const searchWord = (name) => {
    updateSearchInput(name);
    getKeywords();
  };

  const createKeywordFunc = (_id, keyType) => {
    console.log(_id, keyType);
  };
  return (
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
                            searchWord={() => searchWord(value.name)}
                          >
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
                                createKeywordFunc(value._id, item.mainCate);
                              }}
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
  );
};

export default memo(KeywordList);
