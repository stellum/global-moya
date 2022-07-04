import styled from "styled-components";
import { colors, fontSize, fontWeight } from "../theme";
export const HomeInputWrap = styled.div`
  padding-left: 16px;
  margin-top: 22px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: 1px solid ${colors.gray700};
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: center;
`;
export const HomeInput = styled.input`
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  position: relative;
  &::placeholder {
    /* top: 50%; */
    /* transform: translateY(-50%); */

    color: ${colors.gray400};
    font-size: ${fontSize.FontSize14};
    font-weight: ${fontWeight.FontWeight400};
  }
  &:focus {
    outline: none;
  }
`;
export const SearchIconWrap = styled.div`
  width: 24px;
  height: 24px;
`;
