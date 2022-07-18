import styled from "styled-components";

import { colors, fontWeight,fontSize } from "@styles/theme";

import IconsCheckCircleSvg from "@assets/Icons-Success.svg";

export const CommonForm = styled.form`
  width: 360px;
  height: 732px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  font-weight: ${fontWeight.FontWeight500};
  font-size: ${fontSize.FontSize14};
  color: ${colors.gray500};
  align-items: center;
  border: 1px solid red;
  padding-top: 104px;
`;

export const MainDiv = styled.div`
  text-align: center;
  color: ${colors.black};
  font-weight: ${fontWeight.FontWeight600};
  font-size: ${fontSize.FontSize20};
  position: absolute;
  top: 336px;
`;

export const SuccessIcon = styled.div`
  background-image: url(${IconsCheckCircleSvg});
  background-repeat: no-repeat;
  background-size: 62px;
  position: absolute;
  top: 256px;
  width: 63px;
  height: 63px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  cursor: pointer;
  position: absolute;
  top: 708px;
  font-weight: ${fontWeight.FontWeight600};
  margin: 15px 0px 10px;
  width: 328px;
  height: 52px;
  background-color: ${colors.gray350};
  &:hover {
    background-color: ${colors.black};
  }
`;
