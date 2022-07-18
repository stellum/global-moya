import React from "react";
import MainInput from "../MainInput";
import { SearchIcon, FilterIcon } from "@styles/svgIcon";
import {
  MainInputTag,
  MainInputWrap,
  SearchIconWrap,
  FilterIconWrap,
} from "@styles/main/mainPageInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleBtnAction } from "@redux/modalSlice";

const KeywordInput = () => {
  const showBtn = useSelector((state) => state.modalSlice.showBtn);
  const dispatch = useDispatch();
  const toggleModal = () => {
    console.log(showBtn);
    dispatch(toggleBtnAction(!showBtn));
  };

  return (
    <MainInputWrap>
      <SearchIconWrap>
        <SearchIcon />
      </SearchIconWrap>
      <MainInputTag placeholder="뉴스 키워드를 검색해보세요." />
      <FilterIconWrap onClick={toggleModal}>
        <FilterIcon />
      </FilterIconWrap>
    </MainInputWrap>
  );
};

export default KeywordInput;
