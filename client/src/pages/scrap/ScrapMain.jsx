import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // useHistory 추가
import { useSelector, useDispatch } from "react-redux";
import { toggleScrapEditBtn } from "../../redux/reducer/modalSlice";
import AccessToken from "@hoc/AccessToken";
import { bookmarkAll } from "@api/bookmarkApi";

import NewsCard from "../../components/NewsCard";
import ScrapNewsCard from "./scrapcate/ScrapNewsCard";
import ScrapCategory from "./scrapcate/ScrapCategory";
import ScrapEditModal from "@components/ScrapModal/ScrapModal";

import { EditButton, Header } from "@styles/scrap/scrap";
import { BackArrow } from "@styles/svgIcon";
import { FilterBG } from "@styles/naviStyle/naviWrap";
import {
  BtnWrap,
  FilterBtn,
  ScrapMiniModalStyle,
} from "@styles/scrap/ScrapModal";

const ScrapMain = ({ accessToken }) => {
  const [black, setBlack] = useState(true);
  const [bookmarkall, setBookmarkall] = useState([]);
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
  const getBookmarkAllDatas = async () => {
    const response = await bookmarkAll(accessToken);
    setBookmarkall(response.reports);
    console.log("올북마크 반환", response.reports);
    const allbook = response.reports;
    const newslist = allbook.map((i) => {
      if (allbook[i].newsList != 0) {
        const newsThing = allbook[i].newsList;
        return newsThing;
      }
    });
    console.log("올북마크 반환", newslist);
  };
  useEffect(() => {
    getBookmarkAllDatas();
  }, []);
  return (
    <>
      <FilterBG showScrapEditBtn={showScrapEditBtn} onClick={handleBG} />
      <ScrapMiniModalStyle showScrapEditBtn={showScrapEditBtn}>
        <BtnWrap>
          <Link to="/scrap/groupedit">
            <FilterBtn>그룹 편집</FilterBtn>
          </Link>
        </BtnWrap>
      </ScrapMiniModalStyle>

      <Header>
        <div>
          <Link to="/main">
            <BackArrow />
          </Link>
          <h3>스크랩 뉴스</h3>
          <EditButton className="edit" onClick={toggleEditModal}>
            편집
          </EditButton>
        </div>
      </Header>
      <ScrapCategory black={black} />
      <ScrapNewsCard />
    </>
  );
};
export default AccessToken(ScrapMain);
