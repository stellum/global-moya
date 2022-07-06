import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit()}>
        <label htmlFor="email">이메일</label>
        <input
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

        <button type="submit" disabled={isSubmitting}>
          확인
        </button>
      </form>
      <form onSubmit={handleSubmit()}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
          })}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="passwordCheck"
          placeholder="비밀번호 확인"
          {...register("passwordCheck", {
            required: "비밀번호는 필수 입력입니다.",
          })}
        />
      </form>
    </>
  );
};

export default Register;
