import React from "react";
import { useSelector } from "react-redux";

const AccessToken = (SpecificComponent) => {
  const AccessToken = () => {
    const accessToken = useSelector((state) => state.user.accessToken);
    const userLogin = useSelector((state) => state.user.userLogin);
    return (
      <SpecificComponent accessToken={accessToken} userLogin={userLogin} />
    );
  };
  return AccessToken;
};

export default AccessToken;
