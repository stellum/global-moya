import React, { useEffect, useRef } from "react";
import { getKeywords } from "@api/keywordListApi";
import { useSelector, useDispatch } from "react-redux";
import { addKeywordListAction } from "@redux/keywordConnectedSlice";
import { keywordContentRequest } from "@redux/searchFilterSlice";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import AccessToken from "@hoc/AccessToken";

const Home = ({ userLogin, accessToken }) => {
  const { keyTypeList, paramValueList } = useSelector(
    (state) => state.keywordConnectedSlice
  );

  const effectMount = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (effectMount.current === false && userLogin) {
      const getDatas = async () => {
        // reports data
        const response = await getKeywords(accessToken);

        await dispatch(addKeywordListAction(response));
        console.log("keyTypeList", keyTypeList[0]);
        console.log("paramValueList", paramValueList[0]);
        await dispatch(
          keywordContentRequest([keyTypeList[0], paramValueList[0]])
        );
      };
      getDatas();

      return () => {
        console.log("unMounted");
        effectMount.current = true;
      };
    }
  }, []);

  useEffect(() => {
    if (effectMount.current === false && userLogin === false) {
      const getDatas = async () => {
        const response = await getKeywords(accessToken);
        await dispatch(addKeywordListAction(response));
      };
      getDatas();

      return () => {
        console.log("unMounted");
        effectMount.current = true;
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
