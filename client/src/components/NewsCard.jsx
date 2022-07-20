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
} from "@styles/newsCard/cardStyles";
import {
  ScrapIcon,
  TranslateIcon,
  ShareIcon,
  ExpandMoreIcon,
} from "@styles/svgIcon";
import globalMOYAPremiumSvg from "@assets/globalMOYA.svg";
import { dateFormat } from "../util/dateFunc";
import ErrorMsg from "./ErrorMsg";

const NewsCard = ({ view, apply, newsList, errorMsg }) => {
  console.log("newsList", newsList);
  const [scrap, setScrap] = useState(false);
  const [open, setOpen] = useState({});
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  const handleExpand = (e) => {
    setOpen({ [e.target.id]: !open[e.target.id] });
  };

  return (
    <>
      {newsList.length > 0 ? (
        newsList.map((news, idx) => {
          return (
            <Card key={news.newsId}>
              <MainContent viewType={apply ? view : viewType}>
                <ImageContent
                  src={news.imageUrl ? news.imageUrl : globalMOYAPremiumSvg}
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
                  {news.brandName} | {dateFormat(news.publishTime)}
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

export default NewsCard;
