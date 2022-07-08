import { lazy, useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";

import QuickGuideHeader from "../QuickGuideHeader";
import CategoryButton from "./CategoryButton";
// import LvKeywordList from "./LvKeywordList";
const HiglightKeyword = lazy(() => import("./HiglightKeyword"));
const LvKeywordList = lazy(() => import("./LvKeywordList"));

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
  }, [category]);
  /*  
  
    1. keyword가 있으면
    2. datalist에서 keyword를 필터 한 리스트를 보여준다

 */
  const renderLoader = () => <p>Loading</p>;
  return (
    <DefaultContainer>
      <CategoryButton />
      <QuickGuideHeader />
      {keyword ? (
        <Suspense fallback={renderLoader()}>
          <HiglightKeyword dataList={dataList} keyword={keyword} />
        </Suspense>
      ) : (
        <Suspense fallback={renderLoader()}>
          <LvKeywordList
            dataList={dataList}
            myRef={lastElementRef}
            page={page}
          />
        </Suspense>
      )}
    </DefaultContainer>
  );
};

export default CategoryMain;
