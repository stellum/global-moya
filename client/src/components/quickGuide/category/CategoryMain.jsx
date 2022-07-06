import React, { useEffect } from "react";
import QuickGuideHeader from "../QuickGuideHeader";
import CategoryButton from "./CategoryButton";
import LvKeywordList from "./LvKeywordList";
import { DefaultContainer } from "@styles/containerStyle";
import { getCategoryList } from "../../../api/masterApi";
import { useParams } from "react-router-dom";
const CategoryMain = () => {
  const params = useParams();
  const category = params.id;
  useEffect(() => {
    const data = getCategoryList(category);
  }, []);
  return (
    <DefaultContainer>
      <CategoryButton />
      <QuickGuideHeader />
      <LvKeywordList data={data} />
    </DefaultContainer>
  );
};

export default CategoryMain;
