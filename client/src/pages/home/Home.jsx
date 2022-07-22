import React, { useEffect, useRef } from "react";
import { getKeywords } from "@api/keywordListApi";
import { useSelector, useDispatch } from "react-redux";
import { addKeywordListAction } from "@redux/keywordConnectedSlice";
import { keywordContentRequest } from "@redux/searchFilterSlice";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import AccessToken from "@hoc/AccessToken";

const Home = ({ accessToken }) => {
  // const rootStorage = JSON.parse(localStorage["persist:root"]);
  // const keywordSlice = JSON.parse(rootStorage["keywordConnectedSlice"]);
  // const keyTypeList = keywordSlice.keyTypeList;
  // const paramValueList = keywordSlice.paramValueList;
  // const exchangeList = keywordSlice.exchangeList;

  const { keyTypeList, paramValueList, exchangeList } = useSelector(
    (state) => state.keywordConnectedSlice
  );
  console.log("kkk", keyTypeList, paramValueList, exchangeList);
  const { userLogin } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const getDatas = async () => {
      const response = await getKeywords(accessToken);
      await dispatch(addKeywordListAction(response));
    };

    const getFirstKeyword = async () => {
      await dispatch(
        keywordContentRequest([
          keyTypeList[0],
          paramValueList[0],
          exchangeList[0],
        ])
      );
    };

    if (userLogin) {
      getDatas();
      getFirstKeyword();
    }

    return () => {
      console.log("unMounted");
    };
  }, []);

  useEffect(() => {
    if (userLogin === false) {
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

export default AccessToken(Home);
