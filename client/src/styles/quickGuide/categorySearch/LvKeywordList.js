import styled from "styled-components";
import { fontWeight, fontSize } from "@styles/theme";

export const KeywordLi = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  margin-bottom: ${({ children }) =>
    children[1].props.children.length > 40 ? "20px" : "8px"};
  svg {
    flex-shrink: 0;
    margin-right: 12px;
  }
`;
export const HighLightLi = styled.li`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  height: 48px;
  svg {
    flex-shrink: 0;
    margin-right: 12px;
  }
`;
export const KeywordH4 = styled.h4`
  font-weight: ${fontWeight.FontWeight500};
  font-size: ${fontSize.FontSize16};
`;
