import React from "react";
import { useForm } from "react-hook-form";
import { registerFunc } from "@api/registerApi";
import styled from "styled-components";

const RegisterForm = styled.form`
  width: 479px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterInput = styled.input`
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

const RegisterButton = styled.button`
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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <>
      <RegisterForm
        onSubmit={handleSubmit((data) => {
          const formData = new FormData();

          for (let key in data) {
            if (key !== "passwordCheck") {
              formData.append(key, data[key]);
            }
          }

          registerFunc(formData);
          // // 결제 연동 함수 들어갈 자리
        })}
      >
        {/*중복 확인 버튼*/}
        <RegisterInput
          type="email"
          name="email"
          placeholder="email"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {/* // icons-check 들어가는 부분 */}
        <RegisterInput
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value:
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{10,}",
              message: "비밀번호 조건을 충족하지 못했습니다.",
            },
          })}
        />
        {/* // icons-check 들어가는 부분 */}
        <RegisterInput
          type="password"
          name="passwordCheck"
          placeholder="비밀번호 확인"
          {...register("passwordCheck", {
            required: "비밀번호가 일치하지 않습니다.",
          })}
        />
        <RegisterInput
          type="text"
          name="name"
          placeholder="닉네임"
          {...register("name", {
            required: "닉네임을 입력해주세요.",
          })}
        />
        <RegisterInput
          type="number"
          name="phoneNumber"
          maxLength="11"
          pattern="[0-9]+"
          placeholder="전화번호"
          {...register("phoneNumber", {
            required: "전화번호를 입력해주세요.",
          })}
        />
        <RegisterButton type="submit" disabled={isSubmitting}>
          다음
        </RegisterButton>
      </RegisterForm>
    </>
  );
};

export default Register;

// 1. 추후에 api에 따라 닉네임과 전화번호 name 수정 필요
// 2. 입력칸이 모두 채워지지 않으면
