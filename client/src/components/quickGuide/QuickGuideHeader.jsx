import React from "react";
import { QuickInputWrap } from "@styles/quickGuideStyle/QuikcMainStyle";
import { QuickInput } from "@styles/quickGuideStyle/QuickInputStyle";
import { ArrowBack, CancelIcon } from "@styles/svgIcon";
import { useNavigate, useLocation } from "react-router-dom";

const QuickGuideHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <QuickInputWrap>
      <div
        className="arrow"
        onClick={() => {
          location.pathname === "/quick"
            ? navigate("/main", { replace: true })
            : navigate("/quick", { replace: true });
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
