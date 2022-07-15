import React, { useState, useEffect, useRef } from "react";
import { getSearchData } from "@api/searchApi";
import { useSelector, useDispatch } from "react-redux";
import { keywordContentRequest } from "@redux/searchFilterSlice";

import {
  MainKeywordContainerDiv,
  MainKeywordDiv,
  MainKeywordLi,
  MainKeywordUl,
  MainKeywordContentDiv,
  MainKeywordActiveContentDiv,
  MainKeywordActiveContentH2,
  EditIconDiv,
  EditIconCircle,
} from "@styles/main/mainKeywordList";
import NewsCard from "@components/NewsCard";
import AccessToken from "@hoc/AccessToken";
const MainKeywordList = ({ view, apply, accessToken }) => {
  const [toggleTabState, setToggleTabState] = useState(0);

  const rootStorage = JSON.parse(localStorage["persist:root"]);
  const keywordSlice = JSON.parse(rootStorage["keywordConnectedSlice"]);
  const keywordList = keywordSlice.keywordList;
  const keyTypeList = keywordSlice.keyTypeList;
  const paramValueList = keywordSlice.paramValueList;

  const effectMount = useRef(false);
  const dispatch = useDispatch();

  // ! card
  const { timeFilter, mediaType, language, orderBy, keyType, paramValue } =
    useSelector((state) => state.searchFilterSlice);
  const [newsList, setNewsList] = useState([]);
  const [pageToken, setPageToken] = useState("");

  const getDatas = async () => {
    const obj = {
      timeFilter,
      mediaType,
      language,
      orderBy,
      keyType,
      paramValue,
    };
    const response = await getSearchData(obj, accessToken);
    setNewsList(response.newsList);
    setPageToken(response.nextPageToken);
  };

  const toggleTab = async (index) => {
    setToggleTabState(index);
    await dispatch(
      keywordContentRequest([keyTypeList[index], paramValueList[index]])
    );

    getDatas();
  };

  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleMoreIcon = () => {};

  useEffect(() => {
    if (effectMount.current === false) {
      // const getDatas = async () => {
      //   console.log("card실행");
      //   const obj = {
      //     timeFilter,
      //     mediaType,
      //     language,
      //     orderBy,
      //     keyType,
      //     paramValue,
      //   };
      //   const response = await getSearchData(obj);
      //   setNewsList(response.newsList);
      //   setPageToken(response.nextPageToken);
      // };
      getDatas();

      return () => {
        console.log("unMounted 카드");
        effectMount.current = true;
      };
    }
  }, []);

  // useEffect(() => {
  //   if (effectMount.current === false) {
  //     const firstToggle = async () => {
  //       await toggleTab(0);
  //     };
  //     firstToggle();

  //     return () => {
  //       console.log("unMounted toggle0");
  //       effectMount.current = true;
  //     };
  //   }
  // }, []);

  return (
    <>
      <MainKeywordContainerDiv>
        <MainKeywordDiv>
          <MainKeywordUl>
            {keywordList.map((keyword) => {
              const { name, _id, index } = keyword;
              return (
                <MainKeywordLi
                  key={_id}
                  toggleTab={toggleTabState === index}
                  onClick={() => toggleTab(index)}
                >
                  {name.length > 10 ? name.slice(0, 9) + "..." : name}
                </MainKeywordLi>
              );
            })}
          </MainKeywordUl>
          <EditIconDiv onClick={handleMoreIcon}>
            <EditIconCircle />
            <EditIconCircle />
            <EditIconCircle marginRight="0px" />
          </EditIconDiv>
        </MainKeywordDiv>
        <MainKeywordContentDiv>
          {keywordList.map((keyword) => {
            const { _id, index } = keyword;
            return (
              <MainKeywordActiveContentDiv
                key={_id}
                toggleContent={toggleTabState === index}
              >
                <MainKeywordActiveContentH2>
                  Content {index + 1}
                </MainKeywordActiveContentH2>
                {/* <NewsCard key={index} viewType="largeImg" newsList={newsList} /> */}
                <NewsCard
                  key={index}
                  view={view}
                  apply={apply}
                  newsList={newsList}
                />
              </MainKeywordActiveContentDiv>
            );
          })}
        </MainKeywordContentDiv>
      </MainKeywordContainerDiv>
    </>
  );
};

export default AccessToken(MainKeywordList);
