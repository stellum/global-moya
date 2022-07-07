import React, { useState, useEffect } from "react";
import {
  QH2Tag,
  QuickContentDiv,
  QuickHeadDiv,
} from "@styles/quickGuideStyle/QuickContetStyle";
import { CategoryButton } from "@styles/buttonStyle/button";
import { Link } from "react-router-dom";
import { mainCategory } from "./category";
const QuickContent = () => {
  return (
    <>
      <QuickHeadDiv>
        <QH2Tag>검색 가능한 키워드를 탐색해보세요.</QH2Tag>
      </QuickHeadDiv>
      <QuickContentDiv>
        {mainCategory.map((category) => {
          return (
            <Link to={`/quick${category.path}`} key={category.id}>
              <CategoryButton>{category.category}</CategoryButton>
            </Link>
          );
        })}
      </QuickContentDiv>
    </>
  );
};

export default QuickContent;
