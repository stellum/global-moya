import styled from "styled-components";
import { fontWeight, fontSize } from "@styles/theme";
export const KeywordUL = styled.ul`
  margin-top: 20px;
`;

export const KeywordLi = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  margin-bottom: ${({ children }) =>
    children[1].props.children.length > 40 ? "20px" : "8px"};
  svg {
    flex-shrink: 0;
  }
`;
export const HighLightLi = styled.li`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  height: 48px;
  svg {
    flex-shrink: 0;
  }
`;

export const KeywordWrap = styled.div`
  flex-grow: 1;
  padding: 0 10px;
  width: 50%;
`;

export const KeywordH4 = styled.h4`
  font-weight: ${fontWeight.FontWeight500};
  font-size: ${fontSize.FontSize16};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const IconWrap = styled.div`
  width: 24px;
  display: flex;
  justify-content: ${({ star }) => (star ? "flex-end" : "flex-start")};
`;
