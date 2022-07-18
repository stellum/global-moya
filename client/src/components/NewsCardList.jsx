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

import mediumimg from "@assets/mediumimg.png";

const NewsCardList = ({ view, apply, props }) => {
  const [scrap, setScrap] = useState(false);
  const [expand, setExpand] = useState(false);
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  return (
    <>
      <Card>
        <MainContent viewType={apply ? view : viewType}>
          <ImageContent src={mediumimg} viewType={apply ? view : viewType} />
          <CardHeader viewType={apply ? view : viewType}>
            <h2>gg</h2>
          </CardHeader>
        </MainContent>

        <Abstract>
          <p>{props.description}</p>
        </Abstract>

        <SubContent>
          <div className="time">
            {props.brandName} | {props.publishTime}
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
            {props.assetTags.map((tag) => {
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
    </>
  );
};

export default NewsCardList;
