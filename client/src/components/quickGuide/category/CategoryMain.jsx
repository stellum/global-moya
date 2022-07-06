import React from "react";

import QuickGuideHeader from "../QuickGuideHeader";
import { DefaultContainer } from "@styles/containerStyle";
import CategoryButton from "./CategoryButton";
const CategoryMain = () => {
  return (
    <DefaultContainer>
      <CategoryButton />
      <QuickGuideHeader />
    </DefaultContainer>
  );
};

export default CategoryMain;
