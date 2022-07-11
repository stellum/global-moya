import styled from "styled-components";
import { colors, fontWeight } from "../theme";
export const EditKeywordContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: #ffff99;
`;
export const EditKeywordHeader = styled.h2`
  padding: 30px 0px 15px;
  text-align: center;
  font-weight: ${fontWeight.FontWeight600};
  color: ${colors.gray900};
`;
export const EditKeywordUl = styled.ul`
  color: ${colors.gray870};
`;
export const EditKeywordLi = styled.li`
  padding: 13px 0px;
  cursor: pointer;
`;

// export const MainKeywordLi = styled.li`
//   ${(props) => {
//     if (props.toggleTab) {
//       return `
//         border-bottom: 3px solid ${colors.gray900};
//         font-weight: ${fontWeight.FontWeight600};
//         color: ${colors.gray900};
//       `;
//     } else {
//       return `
//         color: ${colors.gray400};
//         font-weight: ${fontWeight.FontWeight500};
//       `;
//     }
//   }}
// `;
// export const MoreIconCircle = styled.span`
//   width: 4px;
//   height: 4px;
//   margin-right: ${(props) => props.marginRight || "4px"};
//   background: ${colors.black};
//   border-radius: 50%;
//   display: inline-block;
//   vertical-align: middle;
// `;
