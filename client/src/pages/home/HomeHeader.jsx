import React from "react";
import { DefaultHeader } from "@styles/common/DefaultHeader";
import { DefaultButton } from "@styles/common/button/button";
import { Profile } from "@styles/svgIcon";
const HomeHeader = () => {
  return (
    <>
      <DefaultHeader>
        <DefaultButton orange>로그인</DefaultButton>
        <DefaultButton>구독</DefaultButton>
        <Profile />
      </DefaultHeader>
    </>
  );
};

export default HomeHeader;
