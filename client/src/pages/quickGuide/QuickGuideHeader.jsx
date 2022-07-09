import React from "react";
import { QuickInputWrap } from "@styles/quickGuide/QuikcMain";
import { QuickInput } from "@styles/quickGuide/QuickInput";
import { ArrowBack, CancelIcon } from "@styles/svgIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchKeyword, isLoading } from "@redux/categorySlice";
import _ from "lodash";
const QuickGuideHeader = ({ inputRef, keyword }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleKeyword = _.debounce((e) => {
    dispatch(searchKeyword(e.target.value));
  }, 200);
  const clearKeyword = () => {
    inputRef.current.value = "";
    dispatch(searchKeyword(""));
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
          dispatch(isLoading(true));
        }}
      >
        <ArrowBack />
      </div>
      <QuickInput
        ref={inputRef}
        placeholder="뉴스 키워드를 검색해보세요."
        onChange={handleKeyword}
        onClick={() => {
          location.pathname === "/quick" && navigate("/keyword");
        }}
      />
      {location.pathname !== "/quick" ? (
        <div className="cancel" onClick={clearKeyword}>
          {keyword && <CancelIcon />}
        </div>
      ) : null}
    </QuickInputWrap>
  );
};

export default QuickGuideHeader;
