import React, { useState, useEffect } from "react";
import { getKeywords } from "@api/keywordListApi";
import { useSelector, useDispatch } from "react-redux";
import { addKeywordListAction } from "@redux/keywordConnectedSlice";
import {
  keywordContentRequest,
  loggedDefaultRequest,
} from "@redux/searchFilterSlice";

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

import storage from "redux-persist/lib/storage";

const MainKeywordList = () => {
  const [toggleTabState, setToggleTabState] = useState(0);
  const { keywordList, keyTypeList, paramValueList } = useSelector(
    (state) => state.keywordConnectedSlice
  );

  // const persistGetItem = async () => {
  //   const getPersistObj = await storage.getItem("persist:root");
  //   const items = JSON.parse(getPersistObj);
  //   console.log("items", items);
  //   // mine.then((item) => {
  //   //   const obj = JSON.parse(item);
  //   //   console.log("obj", obj.keywordConnectedSlice);
  //   // });
  //   // console.log("mine", mine);
  // };
  // persistGetItem();

  const dispatch = useDispatch();

  const toggleTab = (index) => {
    setToggleTabState(index);
    dispatch(
      keywordContentRequest([keyTypeList[index], paramValueList[index]])
    );
  };

  const handleMoreIcon = () => {};

  useEffect(() => {
    const getDatas = async () => {
      const response = await getKeywords();
      // const { reports } = response;
      dispatch(addKeywordListAction(response));
    };
    getDatas();

    // login인 된 사용자
    // dispatch(loggedDefaultRequest([keyTypeList[0], paramValueList[0]]));
  }, []);

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
                <NewsCard viewType="largeImg" />
                {/* <NewsCard view={view} apply={apply} /> */}
              </MainKeywordActiveContentDiv>
            );
          })}
        </MainKeywordContentDiv>
      </MainKeywordContainerDiv>
    </>
  );
};

export default MainKeywordList;
