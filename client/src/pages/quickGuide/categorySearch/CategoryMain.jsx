import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import QuickGuideHeader from "../QuickGuideHeader";
import CategoryButton from "./CategoryButton";
import LvKeywordList from "./LvKeywordList";
// const LvKeywordList = React.lazy(() => import("./LvKeywordList"));

import QuickCategoryHook from "../../../hooks/QuickCategoryHook";
import { DefaultContainer } from "@styles/common/container";
import { getCategoryList } from "@api/masterApi";

const CategoryMain = () => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const params = useParams();
  const category = params.id;

  const fetch = async () => {
    const response = await getCategoryList(category);
    const data = response.details;
    setDataList(data);
  };
  const { lastElementRef } = QuickCategoryHook(setPage);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <DefaultContainer>
      <CategoryButton />
      <QuickGuideHeader />
      <LvKeywordList dataList={dataList} myRef={lastElementRef} page={page} />
    </DefaultContainer>
  );
};

export default CategoryMain;
