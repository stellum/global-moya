import styled from "styled-components";
import { colors, fontWeight } from "../theme";
export const MainKeywordDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const MainKeywordUl = styled.ul`
  display: flex;
  margin-top: 20px;
  overflow-x: scroll;
  /* Firefox */
  scrollbar-width: none;
  /* Internet Explorer 10+ */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MainKeywordLi = styled.li`
  flex-grow: 1;
  flex-shrink: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 110px;
  padding: 15px 0px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  box-sizing: content-box;
  outline: none;
  position: relative;
  outline: none;
  ${(props) => {
    if (props.toggleTab) {
      return `
        border-bottom: 3px solid ${colors.gray900};
        font-weight: ${fontWeight.FontWeight600};
        color: ${colors.gray900};
      `;
    } else {
      return `
        color: ${colors.gray400};
        font-weight: ${fontWeight.FontWeight500};
      `;
    }
  }}
`;
export const MainKeywordContentDiv = styled.div`
  flex-grow: 1;
`;
export const MainKeywordActiveContentDiv = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  height: 100%;
  ${(props) => {
    if (props.toggleContent) {
      return `
        display: block;
      `;
    } else {
      return `
        display: none;
      `;
    }
  }}
`;
export const MainKeywordActiveContentH2 = styled.h2`
  padding: 0px 0 5px 0px;
`;
export const MoreIconDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 0px;
  cursor: pointer;
`;
export const MoreIconCircle = styled.span`
  width: 4px;
  height: 4px;
  margin-right: ${(props) => props.marginRight || "4px"};
  background: ${colors.black};
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
`;
