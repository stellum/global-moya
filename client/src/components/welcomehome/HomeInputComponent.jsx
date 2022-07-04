import React from "react";
import { GlobalMoyaLogo, SearchIcon } from "@styles/svgIcon";
import { HomeContainer } from "@styles/welcomeHomeStyle/homeContainer";
import { useNavigate } from "react-router-dom";
// import {SearchIcon} from '@styles/svgIcon'
import {
  HomeInput,
  HomeInputWrap,
  SearchIconWrap,
} from "@styles/welcomeHomeStyle/homeInput";
const MainInputComponent = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <GlobalMoyaLogo />

      <HomeInputWrap
      // onFocus={() => {
      //   navigate(`/main`);
      // }}
      // placeholder="뉴스 키워드를 검색해보세요"
      >
        <HomeInput placeholder="뉴스 키워드를 검색해보세요" />
        <SearchIconWrap>
          <SearchIcon />
        </SearchIconWrap>
      </HomeInputWrap>
    </HomeContainer>
  );
};

export default MainInputComponent;
