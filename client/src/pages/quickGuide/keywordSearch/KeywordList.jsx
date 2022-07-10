import React from "react";
import MasterValueHook from "@hooks/MasterValueHook";
import {
  KeywordUL,
  HighLightLi,
  KeywordH4,
  KeywordWrap,
  IconWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import _ from "lodash";
import { SearchIcon, StarIcon } from "@styles/svgIcon";
const KeywordList = ({ keyword }) => {
  const { filteredResult } = MasterValueHook(keyword);
  return (
    <KeywordUL>
      {filteredResult.length > 0 &&
        _.map(filteredResult, (item) => (
          <>
            {item.filtered.length > 0 ? (
              <HighLightLi key={item.mainCate}>
                <KeywordH4>{item.mainCate}</KeywordH4>
              </HighLightLi>
            ) : null}
            <KeywordUL>
              {_.map(item.filtered.slice(0, 20), (value) => (
                <HighLightLi key={value._id}>
                  <IconWrap>
                    <SearchIcon />
                  </IconWrap>
                  <KeywordWrap>
                    <KeywordH4>{value.name}</KeywordH4>
                  </KeywordWrap>
                  <IconWrap star>
                    <StarIcon />
                  </IconWrap>
                </HighLightLi>
              ))}
            </KeywordUL>
          </>
        ))}
    </KeywordUL>
  );
};

export default KeywordList;
