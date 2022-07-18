import React, { useState } from "react";
import KeywordCardInput from "./KeywordCardInput";
import MainHeader from "../MainHeader";
import { MainPageContainer } from "@styles/main/mainContainer";
import NewsCard from "@components/NewsCard";
import FilterIconModal from "@components/filterModal/FilterIconModal";
import FilterTypeModal from "@components/filterModal/FilterTypeModal";
import ViewTypeFilter from "@pages/filtermodal/ViewTypeFilter";
import SearchTypeFilter from "@pages/filtermodal/SearchTypeFilter";
import { FilterBG } from "@styles/filterStyle/filterBG";
import { BtnWrap, FilterBtn } from "@styles/filterStyle/filterModal";

import { useSelector, useDispatch } from "react-redux";
import { toggleBtnAction, toggleModalAction } from "@redux/modalSlice";
const KeywordCardMain = () => {
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  const showBtn = useSelector((state) => state.modalSlice.showBtn);
  const showModal = useSelector((state) => state.modalSlice.showModal);
  const [view, setView] = useState(viewType);
  const [apply, setApply] = useState(false);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(toggleModalAction(e.target.id));
  };
  const handleBG = () => {
    dispatch(toggleBtnAction(!showBtn));
    dispatch(toggleModalAction(""));
  };
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
      <MainPageContainer>
        <MainHeader />
        <KeywordCardInput />
      </MainPageContainer>
      {/* <NewsCard /> */}
    </>
  );
};

export default KeywordCardMain;
