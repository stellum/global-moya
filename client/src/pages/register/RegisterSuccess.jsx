import React from "react";

import { CommonForm, MainDiv, SuccessIcon,Button } from "@styles/loginRegister/register/registerSuccess"


const RegisterSuccess = () => {
  return <CommonForm>
            <header>가입완료</header>
            <SuccessIcon />
            <MainDiv>회원가입이 <br/>완료되었습니다.</MainDiv>
            <Button>
              로그인하기
            </Button>
        </CommonForm>;
};

export default RegisterSuccess;
