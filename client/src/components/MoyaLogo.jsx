import React from "react";
import { GlobalMoyaLogo } from "../styles/svgIcon";
import { useNavigate } from "react-router-dom";
const MoyaLogo = ({ mainHeader }) => {
  const navigate = useNavigate();
  const naviHome = () => {
    navigate("/");
  };
  return (
    <>
      <GlobalMoyaLogo
        width={mainHeader ? 203 : 193}
        height={mainHeader ? 32 : 22}
        onClick={mainHeader ? naviHome : ""}
      />
    </>
  );
};

export default MoyaLogo;
