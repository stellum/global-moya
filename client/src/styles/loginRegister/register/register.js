import styled from "styled-components";


export const RegisterForm = styled.form`
  width: 479px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterInput = styled.input`
  width: 90%;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 2px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 40px;
  &:focus {
    outline: none;
    // placeholder 안없어짐
    &::placeholder {
      display: none;
    }
  }
  &:invalid {
    border: 3px solid red;
  }
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export const RegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px 10px;
  width: 90%;
  height: 40px;
  background-color: #efefef;
  &:hover {
    background-color: #dfdfdf;
  }
`;