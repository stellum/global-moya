import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleScrapEditBtn } from "../../redux/reducer/modalSlice";
import { BackArrow } from "@styles/svgIcon";
import { EditButton, Header } from "@styles/scrap/scrap";
import { DefaultContainer } from "@styles/common/container";
import NewsCard from "../../components/NewsCard";
import ScrapCategory from "./scrapcate/ScrapCategory";
import { FilterBG } from "@styles/filterStyle/filterBG";
import { BtnWrap, FilterBtn } from "@styles/scrap/ScrapModal";
import ScrapEditModal from "@components/ScrapModal/ScrapModal";
const ScrapMain = () => {
  const dispatch = useDispatch();
  const showScrapEditBtn = useSelector(
    (state) => state.modalSlice.showScrapEditBtn
  );
  const toggleEditModal = () => {
    dispatch(toggleScrapEditBtn(!showScrapEditBtn));
  };
  const handleBG = () => {
    dispatch(toggleScrapEditBtn(!showScrapEditBtn));
  };
  return (
    <>
      {" "}
      <FilterBG showScrapEditBtn={showScrapEditBtn} onClick={handleBG} />
      <ScrapEditModal showScrapEditBtn={showScrapEditBtn}>
        <BtnWrap>
          <FilterBtn>그룹 편집</FilterBtn>
        </BtnWrap>
        <BtnWrap>
          <FilterBtn>스크랩 편집</FilterBtn>
        </BtnWrap>
      </ScrapEditModal>
      <DefaultContainer>
        <Header>
          <div>
            <BackArrow />
            <h3>스크랩 뉴스</h3>
            <EditButton onClick={toggleEditModal}>편집</EditButton>
          </div>
        </Header>
        <ScrapCategory />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </DefaultContainer>
    </>
  );
};
export default ScrapMain;
