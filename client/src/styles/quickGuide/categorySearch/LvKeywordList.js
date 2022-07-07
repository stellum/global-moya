import styled from "styled-components";
import { fontWeight, fontSize } from "@styles/theme";

export const KeywordLi = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  svg {
    margin-right: 12px;
  }
`;
export const KeywordH4 = styled.h4`
  font-weight: ${fontWeight.FontWeight500};
  font-size: ${fontSize.FontSize16};
`;
