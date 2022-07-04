import styled from "styled-components";
import { DefaultHeader } from "../headerStyles";
import { HomeInput } from "../inputStyle/input.js";
import { colors, fontSize, fontWeight } from "../theme";
export const MainHeader = styled(DefaultHeader)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  position: relative;
`;
export const MainInput = styled(HomeInput)`
  margin-top: 0;
  border: 1px solid ${colors.gray350};
  background-color: ${colors.gray150};

  &::placeholder {
    padding: 0 48px;
    color: ${colors.gray400};
    font-size: ${fontSize.FontSize14};
    font-weight: ${fontWeight.FontWeight400};
  }
`;
