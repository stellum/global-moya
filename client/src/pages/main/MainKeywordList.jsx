import React from "react";
const keyword = [
  "Apple Inc asdfasdfasdfasdf",
  "BApple Inc",
  "sdfsdfApple Inc",
  "aaApple Inc",
  "Apple Inc",
  "Apple Inc",
];
import { MainKeywordLi, MainKeywordUl } from "@styles/main/mainKeywordList";
const MainKeywordList = () => {
  return (
    <>
      <MainKeywordUl>
        {keyword.map((item) => (
          <MainKeywordLi>
            <div>{item.length > 10 ? item.slice(0, 9) + "..." : item}</div>
          </MainKeywordLi>
        ))}
      </MainKeywordUl>
    </>
  );
};

export default MainKeywordList;
