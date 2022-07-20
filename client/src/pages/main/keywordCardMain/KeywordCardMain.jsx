import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleBtnAction, toggleModalAction } from "@redux/modalSlice";
import { fetchSearchNews } from "@redux/searchFilterSlice";
import { isLoading } from "@redux/categorySlice";
import KeywordCardInput from "./KeywordCardInput";
import MainHeader from "../MainHeader";
import NewsCard from "@components/NewsCard";
import FilterIconModal from "@components/filterModal/FilterIconModal";
import FilterTypeModal from "@components/filterModal/FilterTypeModal";
import ViewTypeFilter from "@pages/filtermodal/ViewTypeFilter";
import SearchTypeFilter from "@pages/filtermodal/SearchTypeFilter";
import { MainPageContainer } from "@styles/main/mainContainer";
import { FilterBG } from "@styles/filterStyle/filterBG";
import { BtnWrap, FilterBtn } from "@styles/filterStyle/filterModal";

import Spinner from "@components/common/Spinner";
import AccessToken from "@hoc/AccessToken";

const KeywordCardMain = ({ accessToken }) => {
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  const showBtn = useSelector((state) => state.modalSlice.showBtn);
  const showModal = useSelector((state) => state.modalSlice.showModal);
  const [view, setView] = useState(viewType);
  const [apply, setApply] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(toggleModalAction(e.target.id));
  };
  const handleBG = () => {
    dispatch(toggleBtnAction(!showBtn));
    dispatch(toggleModalAction(""));
  };

  const location = useLocation();
  const { timeFilter, mediaType, language, orderBy } = useSelector(
    (state) => state.searchFilterSlice
  );

  const loading = useSelector((state) => state.categorySlice.loading);

  useEffect(() => {
    inputRef.current.value = location.state.paramValue;
    dispatch(isLoading(true));
    const getDatas = async () => {
      const queryParams = {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType: `${location.state.category}`,
        paramValue: `${location.state.paramValue}`,
        exchange: `${location.state.exchange}`,
      };

      await dispatch(fetchSearchNews({ queryParams, accessToken }))
        .then((response) => {
          console.log(response);
          if (response.payload.status === 400) {
            setErrorMsg("결과가 없습니다.");
          } else {
            setNewsList(response.payload.newsList);
            setPageToken(response.payload.nextPageToken);
          }
        })
        .then(dispatch(isLoading(false)));
    };

    const timeoutID = setTimeout(() => {
      getDatas();
    }, 2000);

    return () => {
      console.log("unMounted 카드");
      clearTimeout(timeoutID);
    };
  }, []);
  return (
    <>
      <FilterIconModal showBtn={showBtn}>
        <BtnWrap>
          <FilterBtn id="view" onClick={handleClick}>
            보기 타입
          </FilterBtn>
        </BtnWrap>
        <BtnWrap>
          <FilterBtn id="sort" onClick={handleClick}>
            데이터 정렬
          </FilterBtn>
        </BtnWrap>
      </FilterIconModal>
      <FilterTypeModal>
        {/* 버튼 조건에 따라 렌더링 */}
        <ViewTypeFilter
          setView={setView}
          view={view}
          showModal={showModal}
          showBtn={showBtn}
          setApply={setApply}
        />
        <SearchTypeFilter showModal={showModal} showBtn={showBtn} />
      </FilterTypeModal>
      <FilterBG showBtn={showBtn} onClick={handleBG} />
      <MainPageContainer style={{ paddingBottom: 0, borderBottom: 0 }}>
        <MainHeader />
        <KeywordCardInput inputRef={inputRef} />
      </MainPageContainer>
      {loading ? (
        <Spinner />
      ) : (
        <NewsCard
          view={view}
          apply={apply}
          newsList={newsList}
          loading={loading}
          errorMsg={errorMsg}
        />
      )}
    </>
  );
};

export default AccessToken(KeywordCardMain);
