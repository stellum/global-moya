import styled from "styled-components";

import { colors } from "@styles/theme";
import { fontSize, fontWeight } from "../theme";

import IconCancelSvg from "@assets/icons-cancel.svg";
import IconEyeShut from "@assets/icons-eyeShut.svg"

export const LoginEmail = styled.div`
  border: 1px solid ${colors.gray350};
  width: 328px;
  height: 48px;
  position: relative;
  margin-bottom: 12px;
`;

// export const SpanIcon = styled.div`
//   cursor: pointer;
//   width: 23px;
//   height: 23px;
//   position: absolute;
// `;


export const LoginInput = styled.input`
  width: 270px;
  height: 45px;
  /* border: 1px solid ${colors.gray350}; */
  border: 0;
  border-radius: 2px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: ${fontWeight.FontWeight500};
  line-height: 22px;
  margin-bottom: 40px;
  margin-left: 12px;
  &:focus {
    outline: none;
    // placeholder 안없어짐
    &::placeholder {
      color: ${colors.gray500};
      display: none;
    }
  }
`;


export const IconCancel = styled.span`
  background-image: url(${IconCancelSvg});
  background-repeat: no-repeat;
  width: 19px;
  height: 19px;
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 13px;
  cursor: pointer;
`;

export const IconText = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;


export const ShowIcon = styled.span`
  background-image: url(${IconEyeShut});
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 13px;
  cursor: pointer;
  
`;
