import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import QuickGuideHeader from "../QuickGuideHeader";
import CategoryButton from "./CategoryButton";
import LvKeywordList from "./LvKeywordList";
import HiglightKeyword from "./HiglightKeyword";
// const LvKeywordList = React.lazy(() => import("./LvKeywordList"));

import QuickCategoryHook from "../../../hooks/QuickCategoryHook";
import { DefaultContainer } from "@styles/common/container";
import { getCategoryList } from "@api/masterApi";
import { useSelector } from "react-redux";
const CategoryMain = () => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const params = useParams();
  const category = params.id;
  const keyword = useSelector((state) => state.categorySlice.keyword);

  const fetch = async () => {
    const response = await getCategoryList(category);
    const data = response.details;
    setDataList(data);
  };
  const { lastElementRef } = QuickCategoryHook(setPage);

  useEffect(() => {
    fetch();
  }, []);
  /*  
  
    1. keyword가 있으면
    2. datalist에서 keyword를 필터 한 리스트를 보여준다

 */
  return (
    <DefaultContainer>
      <CategoryButton />
      <QuickGuideHeader />
      {keyword ? (
        <HiglightKeyword dataList={dataList} keyword={keyword} />
      ) : (
        <LvKeywordList dataList={dataList} myRef={lastElementRef} page={page} />
      )}
    </DefaultContainer>
  );
};

export default CategoryMain;
