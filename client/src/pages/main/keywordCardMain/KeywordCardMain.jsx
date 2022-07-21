import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleBtnAction, toggleModalAction } from "@redux/modalSlice";
import { fetchSearchNews } from "@redux/searchFilterSlice";
import { isLoading } from "@redux/categorySlice";
import KeywordCardInput from "./KeywordCardInput";
import MainHeader from "../MainHeader";
import ViewTypeFilter from "@pages/filtermodal/ViewTypeFilter";
import SearchTypeFilter from "@pages/filtermodal/SearchTypeFilter";
import { MainPageContainer } from "@styles/main/mainContainer";
import { FilterBG } from "@styles/filterStyle/filterBG";
import { BtnWrap, FilterBtn } from "@styles/filterStyle/filterModal";
import NewsCardInfiniteHook from "@hooks/NewsCardInfiniteHook";
import NewsCard from "@components/NewsCard";
import FilterIconModal from "@components/filterModal/FilterIconModal";
import FilterTypeModal from "@components/filterModal/FilterTypeModal";
import Spinner from "@components/common/Spinner";
import ScrollTop from "@components/ScrollTop";

const KeywordCardMain = () => {
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  const showBtn = useSelector((state) => state.modalSlice.showBtn);
  const showModal = useSelector((state) => state.modalSlice.showModal);
  const [view, setView] = useState(viewType);
  const [apply, setApply] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [page, setPage] = useState(1);
  const loading = useSelector((state) => state.categorySlice.loading);
  const { timeFilter, mediaType, language, orderBy } = useSelector(
    (state) => state.searchFilterSlice
  );
  const inputRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const { lastElementRef } = NewsCardInfiniteHook(setPage, loading);

  const handleClick = (e) => {
    dispatch(toggleModalAction(e.target.id));
  };

  const handleBG = () => {
    dispatch(toggleBtnAction(!showBtn));
    dispatch(toggleModalAction(""));
  };

  useEffect(() => {
    console.log(pageToken);
    console.log(loading);
    console.log(page);
  }, [page, loading]);

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
        exchange: `${location.state.exchange ? location.state.exchange : null}`,
      };
      const nextQueryParams = {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType: `${location.state.category}`,
        paramValue: `${location.state.paramValue}`,
        exchange: `${location.state.exchange ? location.state.exchange : null}`,
        nextPageToken: `${pageToken ? pageToken : null}`,
      };
      await dispatch(fetchSearchNews({ queryParams }))
        .then((response) => {
          // console.log(response);
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
  }, [timeFilter, mediaType, orderBy]);

  // useEffect(() => {
  //   dispatch(isLoading(true));
  //   console.log(pageToken);
  //   const getDatas = async () => {
  //     const queryParams = {
  //       timeFilter,
  //       mediaType,
  //       language,
  //       orderBy,
  //       keyType: `${location.state.category}`,
  //       paramValue: `${location.state.paramValue}`,
  //       exchange: `${location.state.exchange ? location.state.exchange : null}`,
  //       nextPageToken: `${pageToken ? pageToken : null}`,
  //     };

  //     await dispatch(fetchSearchNews({ queryParams }))
  //       .then((response) => {
  //         // console.log(response);
  //         if (response.payload.status === 400) {
  //           setErrorMsg("결과가 없습니다.");
  //         } else {
  //           setNewsList([...newsList, ...response.payload.newsList]);
  //           setPageToken(response.payload.nextPageToken);
  //         }
  //       })
  //       .then(dispatch(isLoading(false)));
  //   };

  //   const timeoutID = setTimeout(() => {
  //     getDatas();
  //   }, 2000);

  //   return () => {
  //     console.log("unMounted 카드");
  //     clearTimeout(timeoutID);
  //   };
  // }, [page]);

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
        <SearchTypeFilter
          showModal={showModal}
          showBtn={showBtn}
          setApply={setApply}
        />
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
          lastElementRef={lastElementRef}
        />
      )}
      <ScrollTop />
    </>
  );
};

export default KeywordCardMain;
