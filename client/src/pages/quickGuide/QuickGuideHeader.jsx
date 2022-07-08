import React, { useState } from "react";
import { QuickInputWrap } from "@styles/quickGuide/QuikcMain";
import { QuickInput } from "@styles/quickGuide/QuickInput";
import { ArrowBack, CancelIcon } from "@styles/svgIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchKeyword } from "@redux/categorySlice";

const QuickGuideHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.categorySlice.keyword);
  const handleKeyword = (e) => {
    // setKeyword(e.target.value);
    // console.log(e.target.value);
    dispatch(searchKeyword(e.target.value));
  };

  return (
    <QuickInputWrap>
      <div
        className="arrow"
        onClick={() => {
          location.pathname === "/quick"
            ? navigate("/main", { replace: true })
            : navigate("/quick", { replace: true });
          dispatch(searchKeyword(""));
        }}
      >
        <ArrowBack />
      </div>
      <QuickInput
        placeholder="뉴스 키워드를 검색해보세요."
        onChange={handleKeyword}
        onClick={() => {
          location.pathname === "/quick" && navigate("/keyword");
        }}
      />
      <div className="cancel">
        <CancelIcon />
      </div>
    </QuickInputWrap>
  );
};

export default QuickGuideHeader;
