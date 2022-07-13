import React, { useState, useEffect } from "react";
import { getSearchData } from "@api/searchApi";
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

import mediumimg from "@assets/mediumimg.png";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const NewsCard = ({ apply, view }) => {
  const [scrap, setScrap] = useState(false);
  const [expand, setExpand] = useState(false);
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  // searchNews Datas
  const { timeFilter, mediaType, language, orderBy, keyType, paramValue } =
    useSelector((state) => state.searchFilterSlice);

  const [newsList, setNewsList] = useState([]);
  // redux 처리?
  const [pageToken, setPageToken] = useState("");

  useEffect(() => {
    const getDatas = async () => {
      console.log("before");
      const obj = {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType,
        paramValue,
      };
      const response = await getSearchData(obj);
      await delay(1500);

      console.log("response", response);
      setNewsList(response.newsList);
      setPageToken(response.nextPageToken);

      console.log("after");
    };
    getDatas();

    console.log("page", pageToken);

    return () => {};
  }, [newsList, pageToken]);

  return (
    <>
      {newsList.map((news) => {
        console.log("news", news);
        return (
          <Card>
            <MainContent viewType={apply ? view : viewType}>
              <ImageContent
                src={mediumimg}
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
                <li>
                  <strong>Related Symbols</strong> ARKK,BNR,MTTR,TSP
                </li>
                <li>
                  <strong>Related Symbols</strong> ARKK,BNR,MTTR,TSP
                </li>
                <li>
                  <strong>Related Symbols</strong> ARKK,BNR,MTTR,TSP
                </li>
              </Tickers>
              <div className="tags">
                {news.assetTags.map((tag) => {
                  <span>#{tag}</span>;
                })}
              </div>
              <ExpandMoreIcon
                onClick={() => {
                  setExpand((prev) => !prev);
                }}
                $expand={expand}
              />
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default NewsCard;
