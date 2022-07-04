import styled from "styled-components";
import { HomeInput } from "../welcomeHomeStyle/homeInput";
import { colors, fontSize, fontWeight } from "../theme";
export const MainInputWrap = styled.div`
  width: 100%;
  height: 48px;
  ${({ theme }) => theme.common.flexCenter}
  border: 1px solid ${colors.gray350};
  background-color: ${colors.gray150};
  border-radius: 2px;
`;
export const SearchIconWrap = styled.div`
  width: 48px;
  height: inherit;
  ${({ theme }) => theme.common.flexCenter}
  svg {
    circle {
      stroke: ${colors.gray400};
    }
    path {
      stroke: ${colors.gray400};
    }
  }
`;
export const MainInput = styled(HomeInput)`
  background-color: ${colors.gray150};
  &::placeholder {
    color: ${colors.gray400};
    font-size: ${fontSize.FontSize14};
    font-weight: ${fontWeight.FontWeight400};
  }
  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
`;
export const FilterIconWrap = styled.div`
  width: 48px;
  height: inherit;
  ${({ theme }) => theme.common.flexCenter}
`;
