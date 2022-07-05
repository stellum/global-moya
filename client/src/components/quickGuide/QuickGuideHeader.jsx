import React from "react";
import { QuickInputWrap } from "@styles/quickGuideStyle/QuikcMainStyle";
import { QuickInput } from "@styles/quickGuideStyle/QuickInputStyle";
import { ArrowBack, CancelIcon } from "@styles/svgIcon";
import { useNavigate } from "react-router-dom";

const QuickGuideHeader = () => {
  const navigate = useNavigate();
  return (
    <QuickInputWrap>
      <div
        className="arrow"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBack />
      </div>
      <QuickInput placeholder="뉴스 키워드를 검색해보세요." />
      <div className="cancel">
        <CancelIcon />
      </div>
    </QuickInputWrap>
  );
};

export default QuickGuideHeader;
