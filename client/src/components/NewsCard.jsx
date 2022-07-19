import React, { useState, useCallback } from "react";
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
} from "@styles/newsCard/cardStyles";
import {
  ScrapIcon,
  TranslateIcon,
  ShareIcon,
  ExpandMoreIcon,
} from "@styles/svgIcon";
import { dateFormat } from "../util/dateFunc";
import { translateApi } from "../api/translateApi";
import ErrorMsg from "./ErrorMsg";
import AccessToken from "@hoc/AccessToken";

const NewsCard = ({ view, apply, newsList, errorMsg, accessToken }) => {
  const [scrap, setScrap] = useState(false);
  const [open, setOpen] = useState({});
  const [trakingId, setTrakingId] = useState({});
  const [translate, setTranslate] = useState({});
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  const handleExpand = (e) => {
    setOpen({ [e.target.id]: !open[e.target.id] });
  };
  const fetch = useCallback(
    async (newsId, accessToken) => {
      const response = await translateApi(newsId, accessToken);
      console.log(response);
      setTranslate(response);
    },
    [trakingId]
  );
  const handleTranslate = (e, newsId, accessToken, idx) => {
    setTrakingId({ [e.target.id]: !trakingId[e.target.id] });
    console.log(idx);
    console.log(e.target.id);
    // console.log(trakingId);
    // fetch(newsId, accessToken);
  };
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
                  <h2 id={news.newsId}>{news.title}</h2>
                </CardHeader>
              </MainContent>

              <Abstract>
                <p id={news.newsId}>{news.description}</p>
              </Abstract>

              <SubContent>
                <div className="time">
                  {news.brandName} | {dateFormat(news.publishTime)}
                </div>
                <div className="iconGroup">
                  <TranslateIcon
                    id={idx}
                    onClick={(e) => {
                      handleTranslate(e, news.newsId, accessToken, idx);
                    }}
                  />
                  <ShareIcon />
                  <ScrapIcon
                    onClick={() => {
                      setScrap((prev) => !prev);
                    }}
                    $scrap={scrap}
                  />
                </div>
              </SubContent>

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
                {news.assetTags.length !== 0 ? (
                  <ExpandMoreIcon
                    id={idx}
                    onClick={(e) => {
                      handleExpand(e, idx);
                    }}
                    $expand={`${open[idx] ? "expand" : "none"}`}
                  />
                ) : (
                  <ExpandMoreIcon
                    id={idx}
                    onClick={(e) => {
                      handleExpand(e, idx);
                    }}
                    $expand={`${open[idx] ? "expand" : "card"}`}
                  />
                )}
              </CardFooter>
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
