import React from "react";
import {
  KeywordH4,
  KeywordWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
const HightLightText = ({ children }) => {
  return (
    <KeywordWrap>
      <KeywordH4>{children}</KeywordH4>
    </KeywordWrap>
  );
};

export default HightLightText;
