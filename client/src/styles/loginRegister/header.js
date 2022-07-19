import styled from "styled-components";

import ArrowBack from "@assets/arrow-back.svg";
import { colors, fontSize, fontWeight } from "@styles/theme";

export const Header = styled.div`
  position: absolute;
  top:0;
  width: 360px;
  height: 56px;
`;

export const BackSpace = styled.div`
  background-image: url(${ArrowBack});
  /* background-size: 19px 15px; */
  background-repeat: no-repeat;
  position: absolute;
  top: 32%;
  left: 3.5%; 
  width: 19px;
  height: 15px;
`;

export const TitleHeader = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.FontSize16};
  font-weight: ${fontWeight.FontWeight600};
  position: absolute;
  top: 32% ;
  left: 42%;
`;