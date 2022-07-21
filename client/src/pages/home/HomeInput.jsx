import React from "react";
import { GlobalMoyaLogo, SearchIcon } from "@styles/svgIcon";
import { HomeContainer } from "@styles/home/homeContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  HomeInputTag,
  HomeInputWrap,
  SearchIconWrap,
} from "@styles/home/homeInput";

const HomeInput = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.user.userLogin);

  const handleFocus = () => {
    if (userLogin) {
      navigate("/main");
    } else {
      navigate("/quick");
    }
  };
  return (
    <HomeContainer>
      <GlobalMoyaLogo />
      <HomeInputWrap onFocus={handleFocus}>
        <HomeInputTag placeholder="뉴스 키워드를 검색해보세요" />
        <SearchIconWrap>
          <SearchIcon />
        </SearchIconWrap>
      </HomeInputWrap>
    </HomeContainer>
  );
};

export default HomeInput;
