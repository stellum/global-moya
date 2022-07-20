import styled from "styled-components";

import { colors, fontWeight,fontSize } from "@styles/theme";

import IconsCheckCircleSvg from "@assets/Icons-Success.svg";


export const MainText = styled.span`
  text-align: center;
  color: ${colors.black};
  font-weight: ${fontWeight.FontWeight600};
  font-size: ${fontSize.FontSize20};
  margin-top: 18px;
`;

export const SuccessIcon = styled.div`
  background-image: url(${IconsCheckCircleSvg});
  background-repeat: no-repeat;
  background-size: 62px;
  margin-top: 153px;
  width: 63px;
  height: 63px;
`;

export const SuccessButton = styled.button`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: ${colors.white};
  cursor: pointer;
  /* position: absolute;
  top: 708px; */
  font-weight: ${fontWeight.FontWeight600};
  margin: 308px 0px 10px;
  width: 328px;
  height: 52px;
  background-color: ${colors.gray350};
  &:hover {
    background-color: ${colors.black};
  }
`;
