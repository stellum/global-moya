import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // useHistory 추가
import { useSelector, useDispatch } from "react-redux";
import { toggleScrapEditBtn } from "../../redux/reducer/modalSlice";
import AccessToken from "@hoc/AccessToken";
import { bookmarkOne } from "@api/bookmarkApi";

import NewsCardList from "../../components/NewsCardList";
import ScrapNewsCard from "./scrapcate/ScrapNewsCard";
import ScrapCategory from "./scrapcate/ScrapCategory";
import { FilterBG } from "@styles/naviStyle/naviWrap";
import { ScrapModalStyle, BtnWrap, FilterBtn } from "@styles/scrap/ScrapModal";
import { BackArrow } from "@styles/svgIcon";
import { EditButton, Header } from "@styles/scrap/scrap";

const ScrapNews = ({ accessToken }) => {
  const params = useParams();
  const groupId = params.id;
  const [bookmark, setBookmark] = useState([]);
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
  const getBookmarkOneDatas = async () => {
    const response = await bookmarkOne(accessToken, groupId);
    setBookmark(response.details);
    console.log("해당 북마크 반환", response.details);
  };
  useEffect(() => {
    getBookmarkOneDatas();
  }, []);
  console.log("되는", bookmark);
  return (
    <>
      <FilterBG showScrapEditBtn={showScrapEditBtn} onClick={handleBG} />
      <ScrapModalStyle showScrapEditBtn={showScrapEditBtn}>
        <BtnWrap>
          <Link to="/scrap/groupedit">
            <FilterBtn>그룹 편집</FilterBtn>
          </Link>
        </BtnWrap>
        <BtnWrap>
          <Link to={`/scrapedit/${groupId}`}>
            <FilterBtn>스크랩 편집</FilterBtn>
          </Link>
        </BtnWrap>
      </ScrapModalStyle>

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
      <ScrapCategory />
      {/* {bookmark &&
        bookmark.map((booknews) => {
          return (
            <NewsCardList
              description={booknews.description}
              brandName={booknews.brandName}
              publishTime={booknews.publishTime}
              assetTags={booknews.assetTags}
              title={booknews.title}
              id={booknews.newsId}
            />
          );
        })} */}
    </>
  );
};
export default AccessToken(ScrapNews);
