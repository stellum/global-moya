import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginFunc } from "@api/loginApi";
import { searchUserList } from "@api/subsApi";
import { useNavigate } from "react-router-dom";
import UserCheck from "@hoc/UserCheck";
import { RequiredLogout } from "@hoc/userAccessType";
import { fetchUserSuccess } from "@redux/user/userSlice";
import { subsUserAction } from "@redux/user/subsSlice";
import { getKeywords } from "../../api/keywordListApi";
import { addKeywordListAction } from "@redux/keywordListSlice";
import { LoginForm } from "@styles/login/login";
import { LoginEmail, LoginInput ,IconCancel, IconText, ShowIcon } from "@styles/login/loginInput"
import { LoginDiv, LoginSpan, LonginIcon, LoginAuto, FindPw } from "@styles/login/loginAuto"
import { RegisterLink , LoginRegi } from "@styles/login/loginNew"
import { LoginButton } from "@styles/login/loginButton"
import { setRefreshToken } from "@util/settingSessions";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetch = async (formData, data) => {
    const response = await loginFunc(formData);

    if (response.status === 200) {
      const userList = await searchUserList(data.email);
      const userEmail = userList.userCode.content[0].email;
      const userCode = userList.userCode.content[0].id;

      await dispatch(
        fetchUserSuccess({
          userEmail,
          userCode,
          accessToken: response.data.access_token,
        })
      );
      await dispatch(subsUserAction(userList.subsUser));
      await setRefreshToken(response.data.refresh_token);
      navigate(-1);
    } else if (response.status === 400) {
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
      <LoginEmail>
        <LoginInput
            type="email"
            name="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
        
          <IconCancel>
            <IconText>icons-cancel</IconText>
          </IconCancel>
      </LoginEmail>
      <LoginEmail>
        <LoginInput
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
          })}
        />
          <ShowIcon>
            <IconText>눈동자 아이콘</IconText>
          </ShowIcon>
      </LoginEmail>

      <LoginDiv>
        <LoginSpan>
          {/* <CheckCircle alt="icons-check"  /> */}
          <LonginIcon type="checkbox" value="" />
          <LoginAuto>자동 로그인</LoginAuto>
        </LoginSpan>
        <FindPw>비밀번호 찾기</FindPw>
      </LoginDiv>

      <RegisterLink>
        아직 계정이 없으신가요?
        <LoginRegi>회원가입</LoginRegi>
      </RegisterLink>

      <LoginButton type="submit" disabled={isSubmitting}>
        로그인
      </LoginButton>
    </LoginForm>
  );
};

export default UserCheck(Login, RequiredLogout);

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
