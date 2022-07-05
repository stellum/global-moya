import React from "react";
import {
  QH2Tag,
  QuickContentDiv,
} from "@styles/quickGuideStyle/QuickContetStyle";
import { CategoryButton } from "@styles/buttonStyle/button";
import { Link } from "react-router-dom";
const mainCategory = [
  { id: "index", category: "index", path: "/index" },
  { id: "Macrotopic", category: "Macrotopic", path: "/Macrotopic" },
  { id: "Fx", category: "Fx", path: "/Fx" },
  { id: "Events", category: "Events", path: "/Events" },
  { id: "Topics", category: "Topics", path: "/Topics" },
  { id: "Commodities", category: "Commodities", path: "/Commodities" },
  { id: "Tickers", category: "Tickers", path: "/Tickers" },
  { id: "Category", category: "Category", path: "/Category" },
  { id: "Sectors", category: "Sectors", path: "/Sectors" },
  { id: "Startup", category: "Startup", path: "/Startup" },
];
const QuickContent = () => {
  return (
    <>
      <QH2Tag>검색 가능한 키워드를 탐색해보세요.</QH2Tag>
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
