import React from "react";
import MainHeader from "../components/main/MainHeader";
import MainInputComponent from "../components/main/MainInputComponent";
import { SearchIcon } from "../styles/svgIcon";
import MainKeywordList from "../components/main/MainKeywordList";
import { MainPageContainer } from "../styles/mainPageStyle/mainPageStyles";
import NewsCard from "../components/NewsCard";
const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <MainHeader />
        <MainInputComponent SearchIcon={SearchIcon} />
        <MainKeywordList />
      </MainPageContainer>
      <NewsCard />
    </>
  );
};

export default MainPage;
