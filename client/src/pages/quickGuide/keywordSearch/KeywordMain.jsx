import React, { useRef, useEffect, useState } from "react";
import { DefaultContainer } from "@styles/common/container";
import QuickGuideHeader from "../QuickGuideHeader";
import KeywordList from "./KeywordList";
import { useSelector, useDispatch } from "react-redux";
import AccessToken from "@hoc/AccessToken";
import { isLoading } from "@redux/categorySlice";
import { getKeywords } from "@api/keywordListApi";
const KeywordMain = ({ accessToken }) => {
  const [reports, setReports] = useState([]);
  const [checkTrue, setCheckTrue] = useState(false);
  const keyword = useSelector((state) => state.categorySlice.keyword);
  const loading = useSelector((state) => state.categorySlice.loading);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const fetch = async () => {
    try {
      const reports = await getKeywords(accessToken);
      if (reports.reports.length > 0) {
        setReports(reports.reports);
        await dispatch(isLoading(false));
      }
    } catch (e) {
      console.log(e);
    } finally {
      await dispatch(isLoading(false));
    }
  };
  useEffect(() => {
    inputRef.current.focus();
    fetch();
    // console.log(checkTrue);
  }, [checkTrue]);

  return (
    <DefaultContainer>
      <QuickGuideHeader keyword={keyword} inputRef={inputRef} />
      <KeywordList
        keyword={keyword}
        inputRef={inputRef}
        reports={reports}
        loading={loading}
        setCheckTrue={setCheckTrue}
        checkTrue={checkTrue}
      />
    </DefaultContainer>
  );
};

export default AccessToken(KeywordMain);
