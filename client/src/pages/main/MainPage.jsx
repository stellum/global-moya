import React, { Suspense } from "react";
import MainHeader from "./MainHeader";
import MainInputComponent from "./MainInput";
const FilterComponent = React.lazy(() =>
  import("@pages/filtermodal/FilterComponent")
);
import MainKeywordList from "./MainKeywordList";
import { MainPageContainer } from "@styles/main/mainContainer";
import NewsCard from "@components/NewsCard";
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
