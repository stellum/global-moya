import React, { useState, useEffect } from "react";
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
import globalMOYAPremiumSvg from "@assets/globalMOYA.svg";
import { differenceDayFuncTwo } from "../util/dateFunc";
import { translateApi } from "../api/translateApi";
import ErrorMsg from "./ErrorMsg";
import _ from "lodash";
const NewsCard = ({ view, apply, newsList, errorMsg, lastElementRef }) => {
  const [scrap, setScrap] = useState(false);
  const [open, setOpen] = useState({});
  const [trakingId, setTrakingId] = useState({});
  const [translate, setTranslate] = useState([]);
  const [changeTrans, setChangeTrans] = useState(true);
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  const handleExpand = (e) => {
    setOpen({ [e.target.id]: !open[e.target.id] });
  };
  const fetch = async (newsId) => {
    const response = await translateApi(newsId);

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
    // console.log(translate);
  }, [translate, changeTrans]);

  const handleTranslate = (e, newsId) => {
    console.log("etarget", e.target.id);
    console.log("newsid", newsId);

    if (translate.some((title) => title.newsId === newsId)) {
      setTranslate((prev) => prev.filter((item) => item.newsId !== newsId));
      return;
    }

    setTrakingId({ [e.target.id]: !trakingId[e.target.id] });
    fetch(newsId);
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
          if (newsList.length === idx + 1) {
            return (
              <Card key={news.newsId} ref={lastElementRef}>
                <MainContent viewType={apply ? view : viewType}>
                  <ImageContent
                    src={news.imageUrl ? news.imageUrl : globalMOYAPremiumSvg}
                    viewType={apply ? view : viewType}
                  />
                  <CardHeader viewType={apply ? view : viewType}>
                    {translate &&
                    translate.some((title) => news.newsId === title.newsId) ? (
                      <h2>
                        {" "}
                        {
                          translate.find((item) => item.newsId === news.newsId)
                            .title
                        }
                      </h2>
                    ) : (
                      <h2> {news.title}</h2>
                    )}
                  </CardHeader>
                </MainContent>

                <Abstract>
                  {translate &&
                  translate.some((title) => news.newsId === title.newsId) ? (
                    <p>
                      {
                        translate.find((item) => item.newsId === news.newsId)
                          .description
                      }
                    </p>
                  ) : (
                    <p> {news.description}</p>
                  )}
                </Abstract>

                <SubContent>
                  <div className="time">
                    {news.brandName} | {differenceDayFuncTwo(news.publishTime)}
                  </div>
                  <div className="iconGroup">
                    {translate &&
                    translate.some((title) => news.newsId === title.newsId) ? (
                      <TranslateIconEn
                        id={news.newsId}
                        onClick={(e) => {
                          handleTranslate(e, news.newsId);
                        }}
                      />
                    ) : (
                      <TranslateIconKo
                        id={news.newsId}
                        onClick={(e) => {
                          handleTranslate(e, news.newsId);
                        }}
                      />
                    )}

                    <ShareIcon />
                    <ScrapIcon
                      onClick={() => {
                        setScrap((prev) => !prev);
                      }}
                      $scrap={scrap}
                    />
                  </div>
                </SubContent>
                {news.assetTags && news.assetTags.length > 0 ? (
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
          } else {
            return (
              <Card key={news.newsId} ref={lastElementRef}>
                <MainContent viewType={apply ? view : viewType}>
                  <ImageContent
                    src={news.imageUrl ? news.imageUrl : globalMOYAPremiumSvg}
                    viewType={apply ? view : viewType}
                  />
                  <CardHeader viewType={apply ? view : viewType}>
                    {translate &&
                    translate.some((title) => news.newsId === title.newsId) ? (
                      <h2>
                        {
                          translate.find((item) => item.newsId === news.newsId)
                            .title
                        }
                      </h2>
                    ) : (
                      <h2> {news.title}</h2>
                    )}
                  </CardHeader>
                </MainContent>

                <Abstract>
                  {translate &&
                  translate.some((title) => news.newsId === title.newsId) ? (
                    <p>
                      {
                        translate.find((item) => item.newsId === news.newsId)
                          .description
                      }
                    </p>
                  ) : (
                    <p> {news.description}</p>
                  )}
                </Abstract>

                <SubContent>
                  <div className="time">
                    {news.brandName} | {differenceDayFuncTwo(news.publishTime)}
                  </div>
                  <div className="iconGroup">
                    {translate &&
                    translate.some((title) => news.newsId === title.newsId) ? (
                      <TranslateIconEn
                        id={news.newsId}
                        onClick={(e) => {
                          handleTranslate(e, news.newsId);
                        }}
                      />
                    ) : (
                      <TranslateIconKo
                        id={news.newsId}
                        onClick={(e) => {
                          handleTranslate(e, news.newsId);
                        }}
                      />
                    )}

                    <ShareIcon />
                    <ScrapIcon
                      onClick={() => {
                        setScrap((prev) => !prev);
                      }}
                      $scrap={scrap}
                    />
                  </div>
                </SubContent>
                {news.assetTags && news.assetTags.length > 0 ? (
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
          }
        })
      ) : (
        <ErrorMsg errorMsg={errorMsg} />
      )}
    </>
  );
};

export default NewsCard;
