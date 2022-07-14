import React from "react";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import TokenCheck from "../../hoc/TokenCheck";
const Home = () => {
  return (
    <>
      <HomeContent />
      <HomeFooter />
    </>
  );
};

export default TokenCheck(Home);
