import React from "react";
import {
  KeywordH4,
  KeywordWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
const HightLightText = ({ searchWord, children }) => {
  return (
    <KeywordWrap>
      <KeywordH4 onClick={searchWord}>{children}</KeywordH4>
    </KeywordWrap>
  );
};

export default HightLightText;
