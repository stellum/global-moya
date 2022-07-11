import React, { useState, useEffect } from "react";
import { getKeywords } from "@api/keywordListApi";
import { useSelector, useDispatch } from "react-redux";
import {
  addKeywordListAction,
  fetchSearchNews,
} from "@redux/keywordConnectedSlice";
import {
  MainKeywordDiv,
  MainKeywordLi,
  MainKeywordUl,
  MainKeywordContentDiv,
  MainKeywordActiveContentDiv,
  MainKeywordActiveContentH2,
  MoreIconDiv,
  MoreIconCircle,
} from "@styles/main/mainKeywordList";
import NewsCard from "@components/NewsCard";

const MainKeywordList = () => {
  const [toggleTabState, setToggleTabState] = useState(0);
  const { keywordList } = useSelector((state) => state.keywordConnectedSlice);

  const dispatch = useDispatch();

  const toggleTab = (index) => {
    setToggleTabState(index);
  };

  useEffect(() => {
    const getDatas = async () => {
      const response = await getKeywords();
      const { reports } = response;
      dispatch(addKeywordListAction(reports));
      // dispatch(
      //   fetchSearchNews({
      //     timeFilter: "mth1",
      //     mediaType: "mp",
      //     language: "en",
      //     orderBy: "latest",
      //     keyType: "category",
      //     paramValue: "stocks",
      //   })
      // );
    };
    getDatas();
  }, []);

  /**
   * keyType: "index"
    name: "IBEX 35"
    paramValue: "IB"
    termSeq: "US500"
    updateFlag: "D"
    _id: 8
   */
  return (
    <>
      <MainKeywordDiv>
        <MainKeywordUl>
          {keywordList.map((keyword, index) => {
            console.log("key", keyword);
            const { name, _id } = keyword;

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
        <MoreIconDiv>
          <MoreIconCircle />
          <MoreIconCircle />
          <MoreIconCircle marginRight="0px" />
        </MoreIconDiv>
        <MainKeywordContentDiv>
          {keywordList.map((keyword, index) => {
            const { _id } = keyword;
            console.log("keyword+index", keyword, index);

            return (
              <MainKeywordActiveContentDiv
                key={_id}
                toggleContent={toggleTabState === index}
              >
                <MainKeywordActiveContentH2>
                  Content {index + 1}
                </MainKeywordActiveContentH2>
                <NewsCard viewType="largeImg" />
              </MainKeywordActiveContentDiv>
            );
          })}
        </MainKeywordContentDiv>
      </MainKeywordDiv>
    </>
  );
};

export default MainKeywordList;
