import React from "react";

import { CommonForm } from "@styles/loginRegister/commonForm"
import { Header, BackSpace, TitleHeader } from "@styles/loginRegister/header"
// import { LoginButton } from "@styles/loginRegister/loginRegisterButton"
import { MainText, SuccessIcon, SuccessButton } from "@styles/loginRegister/register/registerSuccess"
import { useNavigate } from "react-router-dom";


const RegisterSuccess = () => {
  const navigate = useNavigate();
  return(
   <>   
        <CommonForm>
            <Header>
              <BackSpace />
              <TitleHeader>가입완료</TitleHeader>
            </Header>
            <SuccessIcon />
              <MainText>회원가입이 <br/>완료되었습니다.</MainText>
            <SuccessButton onClick={() => {navigate("/login")}}>
              로그인하기
            </SuccessButton>
          </CommonForm>
      </>
)
};

export default RegisterSuccess;
