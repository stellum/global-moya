import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";

export const TermsAndConditions = styled.div`
  padding: 12px 16px 16px;
  h3 {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageIcon = styled.img`
  display: flex;
  margin-left: 20px;
  margin-top: -38px;
`;

export const Instruction = styled.div`
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  color: ${colors.gray650};
  margin-left: 9px;
  margin-top: 120px;
  margin-bottom: 28px;
`;

export const CustomerAgreement = styled.div`
  width: 100%;
  color: ${colors.gray400};
  line-height: 2em;
  div {
    font-size: ${fontSize.FontSize14};
    height: 27px;

    ImageContent {
      position: absolute;
      right: 8px;
    }
  }
`;

export const CheckAll = styled.div`
  margin-bottom: 12px;
  padding-bottom: 12px;
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight600};
  color: ${colors.gray800};
  border-bottom: 2px solid #efefef;
  display: flex;
  align-items: center;
  label {
    position: relative;
    input {
    }
  }
  input[type="checkbox"] {
    background-color: white;
    &::before {
      content: "";
      display: block;
      /* position: absolute; */
      border: 2px solid #555;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      background-color: ${colors.gray850};
    }
    &:checked::after {
      content: "";
      display: block;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      /* position: absolute; */
      top: 2px;
      left: 6px;
    }
  }
`;

export const ImageContent = styled.img`
  position: absolute;
  right: 8px;
`;

export const Check = styled.input`
  width: 30px;
  padding-left: 20px;
  top: 219px;
  color: ${colors.gray400};
  /* &:checked {
    background-color: black;
  } */

  label {
    position: relative;
    input {
    }
  }
  input[type="checkbox"] {
    background-color: white;
    &::before {
      content: "";
      display: block;
      /* position: absolute; */
      border: 2px solid #555;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      background-color: ${colors.gray850};
    }
    &:checked::after {
      content: "";
      display: block;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      /* position: absolute; */
      top: 2px;
      left: 6px;
      background-color: black;
    }
  }
`;

export const SignUp = styled.button`
  position: relative;
  width: 100%;
  height: 52px;
  margin-top: 500px;
  color: ${colors.white};
  font-weight: ${fontWeight.FontWeight600};
  background: #b7b7b7;
  border-radius: 2px;
  border: 1px solid #e8e8e8;
`;
