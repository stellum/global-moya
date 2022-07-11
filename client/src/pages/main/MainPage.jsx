import React from "react";
import MainHeader from "./MainHeader";
import MainInputComponent from "./MainInput";
import MainKeywordList from "./MainKeywordList";
import EditProvider from "@components/edit/EditProvider";
import NewsCard from "@components/NewsCard";

import FilterIconModal from "@components/filterModal/FilterIconModal";
import FilterTypeModal from "@components/filterModal/FilterTypeModal";
import ViewTypeFilter from "../filtermodal/ViewTypeFilter";

import { FilterBG } from "@styles/filterStyle/filterBG";
import { MainPageContainer } from "@styles/main/mainContainer";
import { BtnWrap, FilterBtn } from "@styles/filterStyle/filterModal";

import { useSelector, useDispatch } from "react-redux";
import { toggleModalAction } from "../../redux/reducer/modalSlice";

const MainPage = () => {
  const show = useSelector((state) => state.modalSlice.showModal);
  const dispatch = useDispatch();

  return (
    <>
      <FilterIconModal show={show}>
        <BtnWrap>
          <FilterBtn>보기 타입</FilterBtn>
        </BtnWrap>
        <BtnWrap>
          <FilterBtn>데이터 정렬</FilterBtn>
        </BtnWrap>
      </FilterIconModal>
      <FilterTypeModal>
        {/* 버튼 조건에 따라 렌더링 */}
        {/* <SearchTypeFilter /> */}
        <ViewTypeFilter />
      </FilterTypeModal>
      <FilterBG
        show={show}
        onClick={() => dispatch(toggleModalAction(!show))}
      />
      <MainPageContainer>
        <MainHeader />
        <MainInputComponent />
        <MainKeywordList />
        {/* <EditProvider /> */}
      </MainPageContainer>
      <NewsCard />
    </>
  );
};

export default MainPage;
