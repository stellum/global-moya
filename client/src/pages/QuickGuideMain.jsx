import React, { useEffect } from "react";
import QuickGuideHeader from "../components/quickGuide/QuickGuideHeader";
import QuickContent from "../components/quickGuide/QuickContent";
import { DefaultContainer } from "@styles/containerStyle";
import { getMasterData } from "../api/masterApi";
import { useDispatch } from "react-redux";
import { addDataAction } from "../redux/reducer/categorySlice";
const QuickGuideMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const response = await getMasterData();
      dispatch(addDataAction(response));
    };
    fetch();
  }, []);
  return (
    <DefaultContainer>
      <QuickGuideHeader />
      <QuickContent />
    </DefaultContainer>
  );
};

export default QuickGuideMain;
