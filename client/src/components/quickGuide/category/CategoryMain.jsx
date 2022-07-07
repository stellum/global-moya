import React, { useEffect, useState, useRef } from "react";
import QuickGuideHeader from "../QuickGuideHeader";
import CategoryButton from "./CategoryButton";
// const LvKeywordList = React.lazy(() => import("./LvKeywordList"));

import { DefaultContainer } from "@styles/containerStyle";
import { useParams } from "react-router-dom";
import LvKeywordList from "../category/LvKeywordList";
import { useSelector } from "react-redux";
import QuickCategoryHook from "../../../hooks/QuickCategoryHook";

const CategoryMain = () => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [pageLength, setPageLength] = useState(0);

  const params = useParams();

  const storeMasterData = useSelector(
    (state) => state.categorySlice.masterData
  );
  const storeLvData = useSelector((state) => state.categorySlice.lvCategory);

  // console.log(storeMasterData[`${category}`]);
  const { lastElementRef } = QuickCategoryHook(params.id, setPage);

  let minValue = 0;
  let maxValue = 100;

  useEffect(() => {
    minValue = 0;
    maxValue = 100;
  }, []);

  // 콘솔용
  useEffect(() => {
    console.log(storeLvData);
    // console.log("페이지갯수", pageLength);
    // console.log(storeMasterData.length);
    // console.log("토탈", totalResult);
    // console.log("page", page);

    // if (page === 1) {
    //   setDataList(storeLvData.slice(minValue, maxValue));
    // } else {
    //   setDataList((prev) => [
    //     ...prev,
    //     ...storeLvData.slice(minValue, maxValue),
    //   ]); // 뒤로 누적
    // }
    minValue = maxValue;
    maxValue += 100;
    // console.log(minValue, maxValue);
  }, [page]);

  return (
    <DefaultContainer>
      <CategoryButton />
      <QuickGuideHeader />
      {/* <Suspense fallback={<div>loading...</div>}> */}
      <LvKeywordList />
      {/* </Suspense> */}
      {/* {1 !== page && <div ref={target}></div>} */}
      {/* {masterData.length > 0 && page > 1 ? (
        <div ref={lastElementRef}>로딩중...</div>
      ) : null} */}
    </DefaultContainer>
  );
};

export default CategoryMain;
