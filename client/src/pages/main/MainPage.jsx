import React, { Suspense } from "react";
import MainHeader from "./MainHeader";
import MainInputComponent from "./MainInput";
import { FilterBG } from "@styles/filterStyle/filterBG";
import MainKeywordList from "./MainKeywordList";
import { MainPageContainer } from "@styles/main/mainContainer";
import { BtnWrap, FilterBtn } from "@styles/filterStyle/filterModal";

import NewsCard from "@components/NewsCard";
import FilterModal from "@components/FilterModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalAction } from "../../redux/reducer/modalSlice";
const MainPage = () => {
  const show = useSelector((state) => state.modalSlice.showModal);
  const dispatch = useDispatch();
  return (
    <>
      <FilterModal show={show}>
        <BtnWrap>
          <FilterBtn>보기 타입</FilterBtn>
        </BtnWrap>
        <BtnWrap>
          <FilterBtn>데이터 정렬</FilterBtn>
        </BtnWrap>
      </FilterModal>
      <FilterBG
        show={show}
        onClick={() => dispatch(toggleModalAction(!show))}
      />
      <MainPageContainer>
        <MainHeader />
        <MainInputComponent />
        <MainKeywordList />
      </MainPageContainer>
      <NewsCard />
    </>
  );
};

export default MainPage;
