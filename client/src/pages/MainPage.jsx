import React, { Suspense } from "react";
import MainHeader from "../components/main/MainHeader";
import MainInputComponent from "../components/main/MainInputComponent";
const FilterComponent = React.lazy(() =>
  import("../components/filtermodal/FilterComponent")
);
import MainKeywordList from "../components/main/MainKeywordList";
import { MainPageContainer } from "@styles/mainPageStyle/mainPageStyles";
import NewsCard from "../components/NewsCard";
const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <MainHeader />
        <MainInputComponent />
        <MainKeywordList />
      </MainPageContainer>
      <NewsCard />
      <Suspense fallback={<h1>로딩중...</h1>}>
        <FilterComponent />
      </Suspense>
    </>
  );
};

export default MainPage;
