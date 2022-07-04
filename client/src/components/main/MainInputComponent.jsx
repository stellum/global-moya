import React from "react";
import {
  MainInput,
  MainInputWrap,
  SearchIconWrap,
  FilterIconWrap,
} from "@styles/mainPageStyle/mainPageInput";

import { SearchIcon, FilterIcon } from "@styles/svgIcon";
const MainInputComponent = () => {
  return (
    <MainInputWrap>
      <SearchIconWrap>
        <SearchIcon />
      </SearchIconWrap>
      <MainInput placeholder="뉴스 키워드를 검색해보세요." />
      <FilterIconWrap>
        <FilterIcon />
      </FilterIconWrap>
    </MainInputWrap>
  );
};

export default MainInputComponent;
