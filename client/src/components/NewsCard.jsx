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

const NewsCard = () => {
  const [scrap, setScrap] = useState(false);
  const [expand, setExpand] = useState(false);
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  // const { keyType } = useSelector((state) => state.keywordConnectedSlice);
  // const { paramValue } = useSelector((state) => state.keywordConnectedSlice);

  // console.log("keyType", keyType);
  // console.log("paramValue", paramValue);

  useEffect(() => {
    const getDatas = async () => {
      const obj = {
        timeFilter: "mth1",
        mediaType: "mp,op,r",
        language: "en",
        orderBy: "latest",
        // keyType: keyType,
        keyType: "category",
        // paramValue: paramValue,
        paramValue: "stocks",
      };

      const response = await getSearchData(obj);
      console.log("response", response);
    };
    getDatas();
  }, []);

  return (
    <>
      <Card>
        <MainContent viewType={viewType}>
          <ImageContent src={mediumimg} viewType={viewType} />
          <CardHeader viewType={viewType}>
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quam
              cum accusantium voluptates, commodi dolorum alias veniam ut.
              Architecto esse numquam omnis cum alias consequuntur quos
              asperiores tempora quo? Sed.
            </h2>
          </CardHeader>
        </MainContent>

        <Abstract>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            suscipit nobis facere eos aliquam mollitia quasi obcaecati iste,
            ullam perspiciatis praesentium deserunt voluptatum sequi, sunt
            voluptate ea architecto unde inventore.
          </p>
        </Abstract>

        <SubContent>
          <div className="time">medium | 5 minutes ago</div>

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
            <span>#woods</span>
            <span>#worth</span>
            <span>#million</span>
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

export default NewsCard;
