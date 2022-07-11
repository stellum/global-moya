import styled from "styled-components";
import { colors, fontWeight } from "../theme";
export const MainKeywordUl = styled.ul`
  color: ${colors.gray400};
  font-weight: ${fontWeight.FontWeight500};
  padding: 22px 0;
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MainKeywordLi = styled.li`
  margin-right: 20px;
  flex-grow: 1;
  flex-shrink: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 110px;
`;
