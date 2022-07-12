import React, { useEffect } from "react";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import { useSelector } from "react-redux";
const Home = () => {
  // const userEmail = useSelector((state) => state.user.userData.userEmail);
  // useEffect(() => {
  //   console.log(userEmail);
  // }, []);
  return (
    <>
      <HomeContent />
      <HomeFooter />
    </>
  );
};

export default Home;
