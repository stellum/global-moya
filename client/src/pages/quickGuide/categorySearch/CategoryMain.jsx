import { lazy, useState, Suspense, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import QuickGuideHeader from "../QuickGuideHeader";
import CategoryButton from "./CategoryButton";
import Spinner from "@components/common/Spinner";
const HiglightKeyword = lazy(() => import("./HiglightKeyword"));
const LvKeywordList = lazy(() => import("./LvKeywordList"));

import QuickCategoryHook from "../../../hooks/QuickCategoryHook";
import { DefaultContainer } from "@styles/common/container";

import { isLoading, searchKeyword } from "@redux/categorySlice";
import { getCategoryList } from "@api/masterApi";
import { useSelector, useDispatch } from "react-redux";

const CategoryMain = () => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true);
  const params = useParams();
  const category = params.id;
  const keyword = useSelector((state) => state.categorySlice.keyword);
  const loading = useSelector((state) => state.categorySlice.loading);
  const inputRef = useRef(null);
  const { lastElementRef } = QuickCategoryHook(setPage);

  const dispatch = useDispatch();

  const fetch = async () => {
    const response = await getCategoryList(category);
    if (response) {
      dispatch(isLoading(false));
      const data = response.details;
      setDataList(data);
    }
  };

  useEffect(() => {
    fetch();
    inputRef.current.value = "";
    dispatch(searchKeyword(""));
  }, [category]);
  /*  
  
    1. keyword가 있으면
    2. datalist에서 keyword를 필터 한 리스트를 보여준다

 */
  const renderLoader = () => <Spinner />;
  return (
    <DefaultContainer>
      <CategoryButton />
      <QuickGuideHeader inputRef={inputRef} keyword={keyword} />
      {keyword ? (
        <Suspense fallback={renderLoader()}>
          <HiglightKeyword
            dataList={dataList}
            keyword={keyword}
            loading={loading}
          />
        </Suspense>
      ) : (
        <Suspense fallback={renderLoader()}>
          <LvKeywordList
            dataList={dataList}
            myRef={lastElementRef}
            page={page}
            loading={loading}
          />
        </Suspense>
      )}
    </DefaultContainer>
  );
};

export default CategoryMain;
