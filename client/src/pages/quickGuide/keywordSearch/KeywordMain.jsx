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

  const keyword = useSelector((state) => state.categorySlice.keyword);
  const loading = useSelector((state) => state.categorySlice.loading);
  const [filterId, setFilterId] = useState({ id: "", category: "" });
  const [clipKeyword, setClipKeyword] = useState([]);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const fetch = async () => {
    try {
      const reports = await getKeywords(accessToken);
      console.log(reports);
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
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    // setClipKeyword(
    //   reports.filter((item) => item.keyType === filterId.category)
    // );
    console.log("현재클릭", filterId);
    // console.log("포함카테고리 reports", clipKeyword);
  }, [filterId]);
  return (
    <DefaultContainer>
      <QuickGuideHeader keyword={keyword} inputRef={inputRef} />
      <KeywordList
        keyword={keyword}
        inputRef={inputRef}
        reports={reports}
        loading={loading}
        filterId={filterId}
        setFilterId={setFilterId}
        // clipKeyword={clipKeyword}
      />
    </DefaultContainer>
  );
};

export default AccessToken(KeywordMain);
