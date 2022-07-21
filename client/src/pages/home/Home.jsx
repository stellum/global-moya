import React, { useEffect, useRef } from "react";
import { getKeywords } from "@api/keywordListApi";
import { useSelector, useDispatch } from "react-redux";
import { addKeywordListAction } from "@redux/keywordConnectedSlice";
import { keywordContentRequest } from "@redux/searchFilterSlice";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";

const Home = () => {
  const { keyTypeList, paramValueList, exchangeList } = useSelector(
    (state) => state.keywordConnectedSlice
  );
  const user = useSelector((state) => state.user.userLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const getDatas = async () => {
        const response = await getKeywords(accessToken);
        await dispatch(addKeywordListAction(response));

        await dispatch(
          keywordContentRequest([
            keyTypeList[0],
            paramValueList[0],
            exchangeList[0],
          ])
        );
      };
      getDatas();

      return () => {
        console.log("unMounted");
      };
    }
  }, []);

  useEffect(() => {
    if (user === false) {
      const getDatas = async () => {
        const response = await getKeywords();
        await dispatch(addKeywordListAction(response));
      };
      getDatas();

      return () => {
        console.log("unMounted");
      };
    }
  }, []);

  return (
    <>
      <HomeContent />
      <HomeFooter />
    </>
  );
};

export default Home;
