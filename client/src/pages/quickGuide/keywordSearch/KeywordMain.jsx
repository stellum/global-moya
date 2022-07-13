import React, { useRef, useEffect } from "react";
import { DefaultContainer } from "@styles/common/container";
import QuickGuideHeader from "../QuickGuideHeader";
import KeywordList from "./KeywordList";
import { useSelector } from "react-redux";
const KeywordMain = () => {
  const keyword = useSelector((state) => state.categorySlice.keyword);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const updateSearchInput = (value) => {
    inputRef.current.value = value;
  };
  return (
    <DefaultContainer>
      <QuickGuideHeader keyword={keyword} inputRef={inputRef} />
      <KeywordList
        keyword={keyword}
        inputRef={inputRef}
        updateSearchInput={updateSearchInput}
      />
    </DefaultContainer>
  );
};

export default KeywordMain;
