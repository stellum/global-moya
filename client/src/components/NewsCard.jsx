import React, { useState, useEffect, useRef } from "react";
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

const NewsCard = ({ view, apply, newsList }) => {
  const [scrap, setScrap] = useState(false);
  const [expand, setExpand] = useState(false);
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  return (
    <>
      {newsList.map((news) => {
        // console.log("news", news);
        return (
          <Card key={news.newsId}>
            <MainContent viewType={apply ? view : viewType}>
              <ImageContent
                src={news.imageUrl}
                viewType={apply ? view : viewType}
              />
              <CardHeader viewType={apply ? view : viewType}>
                <h2>{news.title}</h2>
              </CardHeader>
            </MainContent>

            <Abstract>
              <p>{news.description}</p>
            </Abstract>

            <SubContent>
              <div className="time">
                {news.brandName} | {news.publishTime}
              </div>

              <div className="iconGroup">
                <TranslateIcon />
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
              <Tickers $expand={expand}>
                {news.nluLabels.map((label, index) => (
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
                  onClick={() => {
                    setExpand((prev) => !prev);
                  }}
                  $expand={expand}
                  tags={true}
                />
              ) : (
                <ExpandMoreIcon
                  onClick={() => {
                    setExpand((prev) => !prev);
                  }}
                  $expand={expand}
                  tags={false}
                />
              )}
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default NewsCard;
