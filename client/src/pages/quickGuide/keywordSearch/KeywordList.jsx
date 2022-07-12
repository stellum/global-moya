import React, { memo } from "react";
import MasterValueHook from "@hooks/MasterValueHook";
import {
  KeywordUL,
  HighLightLi,
  KeywordH4,
  IconWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import _ from "lodash";
import { SearchIcon, StarIcon } from "@styles/svgIcon";
import Highlighter from "react-highlight-words";
import HightLightText from "@components/HightLightText";
import { colors } from "@styles/theme";

const KeywordList = ({ keyword }) => {
  const { filteredResult, generateKey } = MasterValueHook(keyword);
  console.log(filteredResult);
  return (
    <KeywordUL>
      {filteredResult &&
        _.map(filteredResult, (item, idx) => {
          // console.log(item.filtered.length, idx);
          if (item.filtered.length - 1 === idx) {
            // console.log("if 결과d");
          } else {
            // console.log("else 결과");
            return (
              <>
                {item.filtered.length > 0 ? (
                  <HighLightLi key={generateKey(item.mainCate)}>
                    <KeywordH4>{item.mainCate}</KeywordH4>
                  </HighLightLi>
                ) : null}
                <KeywordUL>
                  {_.map(item.filtered.slice(0, 20), (value, idx) => {
                    console.log("value", idx);
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
                            <StarIcon />
                          </IconWrap>
                        </HighLightLi>
                      </>
                    );
                  })}
                </KeywordUL>
              </>
            );
          }
        })}
    </KeywordUL>
  );
};

export default memo(KeywordList);
