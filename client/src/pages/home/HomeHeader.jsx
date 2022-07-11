import React from "react";
import { DefaultHeader } from "@styles/common/DefaultHeader";
import { DefaultButton } from "@styles/common/button/button";
import { Profile } from "@styles/svgIcon";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  return (
    <>
      <DefaultHeader>
        <Link to="/login">
          <DefaultButton orange>로그인</DefaultButton>
        </Link>
        <Link to="/subscribe">
          <DefaultButton>구독</DefaultButton>
        </Link>
        <Profile />
      </DefaultHeader>
    </>
  );
};

export default HomeHeader;
