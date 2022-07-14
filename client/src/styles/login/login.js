import styled from "styled-components";

import { colors } from "@styles/theme";
import { fontSize, fontWeight } from "../theme";

export const LoginForm = styled.form`
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  font-weight: ${fontWeight.FontWeight500};
  font-size: ${fontSize.FontSize14};
  color: ${colors.gray500};
  align-items: center;
  border: 1px solid red;
  padding-top: 104px;
`;







