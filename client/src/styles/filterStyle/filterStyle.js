import styled from "styled-components";
import { colors, fontWeight, fontSize } from "../theme";

export const FilterModal = styled.div`
  padding: 20px 16px;
  box-sizing: border-box;
  position: fixed;
  bottom: -150vh;
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
  left: 0;
  transition: all 0.3s ease-out;
  z-index: 10;
  &.Show {
    bottom: 0;
  }
`;
export const ViewWrap = styled.div`
  display: flex;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${colors.gray250};
`;
export const VerticalView = styled.div``;
export const HorizontalView = styled.div``;
export const H2Tag = styled.h2`
  color: ${colors.black};
  font-weight: ${fontWeight.FontWeight700};
  font-size: ${fontSize.FontSize18};
  margin-bottom: 12px;
`;

export const SelectForm = styled.form`
  border-bottom: 1px solid ${colors.gray250};
  margin-bottom: 24px;
  div {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    &:last-child {
      margin-bottom: 24px;
    }
  }
  label {
    font-weight: ${fontWeight.FontWeight400};
    font-size: ${fontSize.FontSize16};
    margin-left: 10px;
    color: ${colors.gray770};
  }
  input[type="radio"] {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
  }
  input[type="radio"] {
    background-color: #fff;
    border: 1px solid ${colors.gray500};
    &:checked {
      border: 4px solid ${colors.gray900};
    }
  }

  input:checked + label {
    font-weight: ${fontWeight.FontWeight500};
    color: ${colors.black};
  }
`;

export const PublishForm = styled.form`
  input[type="radio"] {
    appearance: none;
  }
  label {
    font-weight: ${fontWeight.FontWeight400};
    font-size: ${fontSize.FontSize16};
    margin-left: 10px;
    color: ${colors.gray770};
    &::before {
      content: "";
      width: 40px;
    }
  }
`;
export const PublishWrap = styled.div``;
