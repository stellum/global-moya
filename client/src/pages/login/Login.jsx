import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginFunc } from "@api/loginApi";
import { searchUserList } from "@api/subsApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pxToRem } from "../../styles/theme";

import { fetchUserSuccess } from "@redux/user/userSlice";
import { useDispatch } from "react-redux";
import UserCheck from "../../hoc/UserCheck";
import { RequiredLogout } from "../../hoc/userAccessType";
import { subsUserAction } from "@redux/user/subsSlice";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetch = async (formData, data) => {
    const status = await loginFunc(formData);
    const response = await searchUserList(data.email);
    const userEmail = response.userCode.content[0].email;
    const userCode = response.userCode.content[0].id;
    if (response) {
      dispatch(fetchUserSuccess({ userEmail, userCode }));
      dispatch(subsUserAction(response.subsUser));
      navigate("/");
    } else if (status === 400) {
      alert("경고");
    }
  };

  return (
    <LoginForm
      onSubmit={handleSubmit((data) => {
        const formData = new FormData();

        for (let key in data) {
          formData.append(key, data[key]);
        }

        fetch(formData, data);

        // formData는 XMLHttpRequest 전송을 위한 특수한 객체이므로 일반적인 방법으로는 콘솔에 못 찍음
        // 밑에 처럼 keys(), values() 메서드를 써서 찍어줘야...
        for (let key of formData.keys()) {
          // console.log(key);
        }
        for (let value of formData.values()) {
          // console.log(value);
        }
      })}
    >
      // icons-cancel 들어갈 자리
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
      // 눈동자 아이콘 들어갈 자리
      <LoginInput
        type="password"
        name="password"
        placeholder="password"
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
        })}
      />
      <div>
        <span>
          <img src="" alt="icons-check" />
          자동 로그인
        </span>
        <span>비밀번호 찾기</span>
      </div>
      <div>
        아직 계정이 없으신가요?
        <a>회원 가입</a>
      </div>
      <LoginButton type="submit" disabled={isSubmitting}>
        로그인
      </LoginButton>
    </LoginForm>
  );
};

export default UserCheck(Login, RequiredLogout);
