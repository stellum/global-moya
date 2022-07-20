import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // useHistory 추가
import { useSelector, useDispatch } from "react-redux";
import { toggleScrapMoveBtn } from "../../redux/reducer/modalSlice";
import AccessToken from "@hoc/AccessToken";
import { bookmarkOne } from "@api/bookmarkApi";

import { ScrapMoveWrap, ScrapMoveh4 } from "@styles/scrap/scrapModal";
import {
  Btn50percent,
  BtnWrap,
  FixedHeader,
  NewsCardcontent,
  Wrap,
} from "@styles/scrap/scrap";
import { ApplyBtn, ButtonWrapDiv } from "@styles/scrap/scrapnews";
import ScrapNewsCard from "./scrapcate/ScrapNewsCard";
import ScrapMoveModal from "./scrapcate/ScrapMoveModal";
import { FilterBG } from "@styles/naviStyle/naviWrap";
import { BackArrow } from "@styles/svgIcon";
import { BtnWrapVisible } from "../../styles/scrap/scrap";

const ScrapNewsEdit = ({ scrapcheck }) => {
  const params = useParams();
  const groupId = params.id;
  const [bookmark, setBookmark] = useState([]);
  const dispatch = useDispatch();
  const showScrapMoveBtn = useSelector(
    (state) => state.modalSlice.showScrapMoveBtn
  );
  const toggleMoveModal = () => {
    dispatch(toggleScrapMoveBtn(!showScrapMoveBtn));
  };
  const handleBG = () => {
    dispatch(toggleScrapMoveBtn(!showScrapMoveBtn));
  };
  const getBookmarkOneDatas = async () => {
    const response = await bookmarkOne(groupId);
    setBookmark(response.details);
    console.log("해당 북마크 반환", response.details);
  };
  useEffect(() => {
    getBookmarkOneDatas();
  }, [params.id]);
  return (
    <>
      <FilterBG showScrapMoveBtn={showScrapMoveBtn} onClick={handleBG} />
      <FixedHeader>
        <div>
          <BackArrow />
          <h3>그룹네임있어야함{groupId}</h3>
          <button>완료</button>
        </div>
      </FixedHeader>
      <NewsCardcontent>
        <ScrapNewsCard /> <ScrapNewsCard /> <ScrapNewsCard /> <ScrapNewsCard />
        <ScrapNewsCard /> <ScrapNewsCard /> <ScrapNewsCard />
      </NewsCardcontent>
      <BtnWrapVisible visible={!(scrapcheck = false)}>
        <Btn50percent onClick={toggleMoveModal}>이동</Btn50percent>
        <Btn50percent className="delete">삭제</Btn50percent>
      </BtnWrapVisible>
      <ScrapMoveWrap showScrapMoveBtn={showScrapMoveBtn}>
        <ScrapMoveh4>이동할 그룹 선택</ScrapMoveh4>
        <ScrapMoveModal />
        <Wrap>
          <ButtonWrapDiv>
            <ApplyBtn>취소</ApplyBtn>
            <ApplyBtn apply>저장</ApplyBtn>
          </ButtonWrapDiv>
        </Wrap>
      </ScrapMoveWrap>
    </>
  );
};
export default AccessToken(ScrapNewsEdit);
