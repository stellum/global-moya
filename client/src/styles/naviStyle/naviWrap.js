import styled from "styled-components";
import { colors, fontWeight, fontSize } from "../theme";
import { DefaultContainer } from "@styles/common/container";
import { MoreIcon } from "../svgIcon";

export const NaviWrap = styled.div`
  position: fixed;
  width: 280px;
  height: 100vh;
  left: ${({ showNavi }) => (showNavi ? "0" : "-280px")};
  top: 0;
  transition: all 0.3s ease-out;
  background-color: ${colors.gray150};
  z-index: 2;
`;
export const NaviGo = styled(DefaultContainer)`
  height: 48px;
  background-color: ${colors.white};
  border-top: 1px solid ${colors.gray250};
  display: flex;
  align-items: center;
  color: ${colors.black};
  font-size: ${fontSize.FontSize16};
  &:last-child {
    border-bottom: 1px solid ${colors.gray250};
  }
  &::after {
    content: ">";
    position: absolute;
    right: 16px;
  }
`;
export const Navispan = styled.div`
  height: 10px;
  width: 100%;
  border-top: 1px solid ${colors.gray250};
`;
