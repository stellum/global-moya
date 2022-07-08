import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loginFunc } from "@api/loginApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pxToRem } from "@styles/theme";

const LoginForm = styled.form`
  width: 479px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  width: 90%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 40px;
  &:focus {
    outline: none;
    // placeholder 안없어짐
    &::placeholder {
      display: none;
    }
  }
`;

const LoginButton = styled.button`
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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <LoginForm
      onSubmit={handleSubmit((data) => {
        loginFunc(data);
      })}
    >
      <label htmlFor="email">이메일</label>
      <LoginInput
        type="email"
        name="email"
        placeholder="email"
        {...register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
      />
      <label htmlFor="password">비밀번호</label>
      <LoginInput
        type="password"
        name="password"
        placeholder="password"
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
        })}
      />
      <div>
        계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해주시기
        바랍니다.
      </div>
      <LoginButton type="submit" disabled={isSubmitting}>
        로그인
      </LoginButton>
    </LoginForm>
  );
};

export default Login;
