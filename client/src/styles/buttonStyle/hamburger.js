import styled from "styled-components";

export const Hamburger = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
`;
export const HamburgerBar = styled.div`
  width: 20px;
  margin-bottom: 6px;
  height: 2px;
  background: #000;
  &:last-child {
    margin-bottom: 0;
  }
`;
