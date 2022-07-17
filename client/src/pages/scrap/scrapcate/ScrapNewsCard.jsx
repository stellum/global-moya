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
  ScrapCheckIcon,
  TranslateIcon,
  ShareIcon,
  ExpandMoreIcon,
} from "@styles/svgIcon";

import mediumimg from "@assets/mediumimg.png";

const ScrapNewsCard = ({ view, apply, newsList }) => {
  const [scrapcheck, setScrapcheck] = useState(false);
  const [expand, setExpand] = useState(false);
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  return (
    <>
      <Card>
        <MainContent viewType={apply ? view : viewType}>
          <ImageContent src={mediumimg} viewType={apply ? view : viewType} />
          <CardHeader viewType={apply ? view : viewType}>
            <h2>title</h2>
          </CardHeader>
        </MainContent>

        <Abstract>
          <p>description</p>
        </Abstract>

        <SubContent>
          <div className="time">brandName | publishTime</div>

          <div className="iconGroup">
            <TranslateIcon />
            <ShareIcon />
            <ScrapCheckIcon
              onClick={() => {
                setScrapcheck((prev) => !prev);
              }}
              $scrapcheck={scrapcheck}
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
            <span>tag</span>;
          </div>
          <ExpandMoreIcon
            onClick={() => {
              setExpand((prev) => !prev);
            }}
            $expand={expand}
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default ScrapNewsCard;
