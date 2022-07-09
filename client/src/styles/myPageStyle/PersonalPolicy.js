import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";

export const PersonalPolicy = styled.div`
  width: 100%;
  h3 {
    height: 56px;
    color: ${colors.gray900};
    font-weight: ${fontWeight.FontWeight600};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  background: ${colors.gray150};
  border-radius: 2px;
  left: 15px;
  margin: 20px;
  padding: 15px 15px 15px 15px;
  font-size: ${fontSize.FontSize12};
  font-weight: ${fontWeight.FontWeight400};
  line-height: 18px;
  letter-spacing: -0.2px;
  color: ${colors.gray650};
`;