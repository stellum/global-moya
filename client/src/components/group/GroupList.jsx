import React from "react";
import styled from "styled-components";
import Hamburger from "../common/Hamburger";
import { DeleteIcon } from "@styles/svgIcon";
import { colors } from "@styles/theme";
const GroupList = () => {
  return (
    <GroupWrap>
      <IconWrap>
        <DeleteIcon />
      </IconWrap>
      <GroupTextWrap>
        <Text>비지니스 모델</Text>
      </GroupTextWrap>
      <HamburgerWrap>
        <Hamburger />
      </HamburgerWrap>
    </GroupWrap>
  );
};

export default GroupList;

const GroupWrap = styled.div`
  width: 100%;
  height: 48px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  position: relative;
`;
const IconWrap = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  svg {
    height: 20px;
  }
`;
const GroupTextWrap = styled.div`
  border: 1px solid ${colors.gray250};
  padding: 7px 10px;
  border-radius: 4px;
`;
const HamburgerWrap = styled.div`
  width: 48px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
`;
const Text = styled.h4``;
