import React from "react";
// import LoginSection from "./login/LoginSection";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 1px solid #000;
`;

const SiginIn = () => {
  return (
    <>
      <Header>Login</Header>
      {/* <LoginSection /> */}
      {/* <Register /> */}
    </>
  );
};

export default SiginIn;
