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
// svg를 컴포넌트 시키면 styled component에 ref적용이 안된다. 그래서 태그로 처리하기 위한 import
import ExpandMoreIconSvg from "@assets/ExpandMoreIcon.svg";

const NewsCard = ({ view, apply, newsList }) => {
  const [scrap, setScrap] = useState(false);
  const [expand, setExpand] = useState(false);
  const svgRefs = useRef([]);
  const tickersRefs = useRef([]);

  //! view랑 viewType이랑 같은 값.
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  return (
    <>
      {newsList &&
        newsList.map((news, idx) => {
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
                <Tickers
                // $expand={expand}
                >
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
                <ExpandMoreIcon
                  src={ExpandMoreIconSvg}
                  ref={(el) => (svgRefs.current[idx] = el)}
                  onClick={() => {
                    console.log("svgRef", svgRefs.current[idx]);
                    let targetStyle = svgRefs.current[idx].style.transform;

                    svgRefs.current[idx].style.transform =
                      targetStyle === "rotate(0deg) translateY(0%)"
                        ? "rotate(180deg) translateY(0%)"
                        : "rotate(0deg) translateY(0%)";

                    svgRefs.current[idx].style.transform =
                      targetStyle === "rotate(180deg) translateY(-50%)"
                        ? "rotate(0deg) translateY(50%)"
                        : "rotate(180deg) translateY(-50%)";
                    setExpand((prev) => !prev);
                  }}
                  // $expand={expand}
                  tags={news.assetTags.length && true}
                />
              </CardFooter>
            </Card>
          );
        })}
    </>
  );
};

export default NewsCard;
