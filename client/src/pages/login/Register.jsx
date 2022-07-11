import React from "react";
import { useForm } from "react-hook-form";
import { registerFunc } from "../../api/registerApi";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          const formData = new FormData();
          for (let key in data) {
            formData.append(key, data[key]);
          }
          registerFunc(formData);
        })}
      >
        <div>중복 확인</div>
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
        // icons-check 들어가는 부분
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            pattern: {
              value:
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{10,}",
              message: "비밀번호 조건을 충족하지 못했습니다.",
            },
          })}
        />
        // icons-check 들어가는 부분
        <input
          type="password"
          name="passwordCheck"
          placeholder="비밀번호 확인"
          {...register("passwordCheck", {
            required: "비밀번호는 필수 입력입니다.",
          })}
        />
        <button type="submit" disabled={isSubmitting}>
          다음
        </button>
      </form>
    </>
  );
};

export default Register;
