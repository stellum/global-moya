import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  MainContent,
  SubContent,
  CardFooter,
  ImageContent,
  Abstract,
  CardHeader,
  Tickers,
  NoResultTickers,
} from "@styles/newsCard/cardStyles";
import {
  ScrapIcon,
  TranslateIconKo,
  ShareIcon,
  ExpandMoreIcon,
  TranslateIconEn,
} from "@styles/svgIcon";
import { dateFormat } from "../util/dateFunc";
import { translateApi } from "../api/translateApi";
import ErrorMsg from "./ErrorMsg";
import { useEffect } from "react";
import _ from "lodash";
import AccessToken from "@hoc/AccessToken";
const NewsCard = ({ view, apply, newsList, errorMsg, accessToken }) => {
  // console.log(accessToken);
  const [scrap, setScrap] = useState(false);
  const [open, setOpen] = useState({});
  const [trakingId, setTrakingId] = useState({});
  const [translate, setTranslate] = useState([]);
  const [changeTrans, setChangeTrans] = useState(true);
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  const handleExpand = (e) => {
    setOpen({ [e.target.id]: !open[e.target.id] });
  };
  const fetch = async (newsId, accessToken) => {
    const response = await translateApi(newsId, accessToken);
    console.log(response);

    setTranslate((prev) => [
      ...prev,
      {
        newsId,
        description: response.description,
        title: response.title,
      },
    ]);
  };

  useEffect(() => {
    console.log("번역패치", translate);
  }, [translate, changeTrans]);

  const handleTranslate = (e, newsId, accessToken) => {
    setTrakingId({ [e.target.id]: !trakingId[e.target.id] });
    fetch(newsId, accessToken);
    // if (e.target.id === "ko") {

    //   // checkTrans(translate, newsId);
    //   setChangeTrans(false);
    // } else if (e.target.id === "en") {
    //   // deleteTrans(translate, newsId);
    //   setChangeTrans(true);
    // }
  };
  const checkTrans = (translate, newsId) => {
    const result = translate.some((item) => item.newsId === newsId);
    console.log(result);
    return result;
  };
  const deleteTrans = (translate, newsId) => {
    setTranslate(translate.filter((item) => item.newsId !== newsId));
  };
  /* 
    1. 번역을 클릭한다
    2. 번역 내용을 받아와서 newsId와 같이 저장 -> 배열
    3. 저장 내용에 newsId가 같은게 있으면 아이콘은 en으로 변경
    4. 다시 클릭하면 배열에서 제거와 함께 아이콘 ko로 변경
  */

  return (
    <>
      {newsList.length > 0 ? (
        newsList.map((news, idx) => {
          return (
            <Card key={news.newsId}>
              <MainContent viewType={apply ? view : viewType}>
                <ImageContent
                  src={news.imageUrl}
                  viewType={apply ? view : viewType}
                />
                <CardHeader viewType={apply ? view : viewType}>
                  {news.newsId === translate.newsId ? (
                    <h2 id={news.newsId}>{translate.title}</h2>
                  ) : (
                    <h2 id={news.newsId}>{news.title}</h2>
                  )}
                </CardHeader>
              </MainContent>

              <Abstract>
                {news.newsId === translate.newsId ? (
                  <p id={news.newsId}>{translate.description}</p>
                ) : (
                  <p id={news.newsId}>{news.description}</p>
                )}
              </Abstract>

              <SubContent>
                <div className="time">
                  {news.brandName} | {dateFormat(news.publishTime)}
                </div>
                <div className="iconGroup">
                  <TranslateIconKo
                    id="ko"
                    onClick={(e) => {
                      handleTranslate(e, news.newsId, accessToken);
                    }}
                  />
                  {/* {changeTrans ? (
                   
                  ) : (
                    <TranslateIconEn
                      id="en"
                      onClick={(e) => {
                        handleTranslate(e, news.newsId, accessToken);
                      }}
                    />
                  )} */}

                  <ShareIcon />
                  <ScrapIcon
                    onClick={() => {
                      setScrap((prev) => !prev);
                    }}
                    $scrap={scrap}
                  />
                </div>
              </SubContent>
              {news.assetTags.length > 0 ? (
                <CardFooter>
                  <Tickers $expand={`${open[idx] ? "expand" : "none"}`}>
                    {news.nluLabels.slice(0, 3).map((label, index) => (
                      <li key={label + index}>
                        <strong>Related Symbols</strong> {label}
                      </li>
                    ))}
                  </Tickers>

                  <div className="tags">
                    {news.assetTags.map((tag, index) => (
                      <span key={tag + index}>#{tag}</span>
                    ))}
                  </div>

                  <ExpandMoreIcon
                    id={idx}
                    onClick={(e) => {
                      handleExpand(e, idx);
                    }}
                    $expand={`${open[idx] ? "expand" : "none"}`}
                  />
                </CardFooter>
              ) : (
                <NoResultTickers />
              )}
            </Card>
          );
        })
      ) : (
        <ErrorMsg errorMsg={errorMsg} />
      )}
    </>
  );
};

export default AccessToken(NewsCard);
