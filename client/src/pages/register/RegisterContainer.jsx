import React, { useState } from "react";
import Register from "./Register";
import RegisterPolicy from "./RegisterPolicy";
import RegisterSuccess from "./RegisterSuccess";
import { ImageIcon } from "../../styles/register/registerPolicy";
import BackArrow from "../../assets/images/BackArrow.svg";

const RegisterContainer = () => {
  const [registerPage, setRegisterPage] = useState("onPolicy");

  return (
    <div>
      {/* backArrow 아이콘 들어갈 자리 */}
      <h3>회원가입</h3>
      {registerPage === "onPolicy" && (
        <RegisterPolicy setRegisterPage={setRegisterPage} />
      )}
      {registerPage === "onInput" && (
        <Register setRegisterPage={setRegisterPage} />
      )}
      {registerPage === "onSuccess" && <RegisterSuccess />}
    </div>
  );
};

export default RegisterContainer;
