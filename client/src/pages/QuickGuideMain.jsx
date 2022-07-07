import React, { useEffect } from "react";
import QuickGuideHeader from "../components/quickGuide/QuickGuideHeader";
import QuickContent from "../components/quickGuide/QuickContent";
import { DefaultContainer } from "@styles/containerStyle";
import { getMasterData } from "../api/masterApi";
import { useDispatch } from "react-redux";
import { addDataAction } from "../redux/reducer/categorySlice";
import { useQuery } from "react-query";
const QuickGuideMain = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery("masterData", () => getMasterData());
  // console.log(isLoading);
  // useEffect(() => {
  //   if (!isLoading) dispatch(addDataAction(data));
  // }, [isLoading]);
  return (
    <DefaultContainer>
      <QuickGuideHeader />
      {isLoading ? <h1>로딩중...</h1> : <QuickContent />}
    </DefaultContainer>
  );
};

export default QuickGuideMain;
