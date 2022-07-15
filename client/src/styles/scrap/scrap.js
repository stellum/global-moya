import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";
import { DefaultContainer } from "../common/container";

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;

  height: 56px;
  h3 {
    text-align: center;
    color: ${colors.gray900};
    font-weight: ${fontWeight.FontWeight600};
  }
  div {
    width: 100%;
    margin: 0 auto;
    position: relative;
    svg {
      position: absolute;
      top: -4px;
    }
    button {
      cursor: pointer;
      position: absolute;
      top: -6px;
      right: 0;
    }
  }
`;

export const EditButton = styled.button`
  background: none;
  color: ${colors.pointOrange100};
  font-size: ${fontSize.FontSize16};
  font-weight: ${fontWeight.FontWeight600};
`;
