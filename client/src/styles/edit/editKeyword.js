import styled from "styled-components";
import { colors, fontWeight } from "../theme";
export const EditKeywordContainer = styled.div`
  display: ${({ showEditBtn }) => (showEditBtn ? "flex" : "none")};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: ${colors.white};
  z-index: 999;
`;
export const EditKeywordHeader = styled.h2`
  padding: 30px 0px 15px;
  text-align: center;
  font-weight: ${fontWeight.FontWeight600};
  color: ${colors.gray900};
`;
export const EditKeywordUl = styled.ul`
  color: ${colors.gray870};
  height: 100%;
`;
// 나중에 컴포넌트로 분리
export const EditButtonDiv = styled.div`
  position: relative;
  bottom: 16px;
  width: 90%;
  margin: 0 auto;
`;
export const EditButtonCancel = styled.button`
  margin-right: 4%;
  width: 26%;
  height: 52px;
  background-color: ${colors.gray350};
  color: ${colors.white};
`;
export const EditButtonSave = styled.button`
  width: 70%;
  height: 52px;
  background-color: ${colors.gray900};
  color: ${colors.white};
`;
