//스크랩뉴스 카테고리
import React, { useEffect, useRef } from "react";
import { mainCategory } from "../../quickGuide/category";
import { useDispatch } from "react-redux";
import { isLoading } from "@redux/categorySlice";
import _ from "lodash";
import {
  DefaultButton,
  CategoryButton,
  ScrapButton,
  RadiusBlackButton,
} from "@styles/common/button/button";
import { QuickButtonWrap } from "@styles/quickGuide/categorySearch/quickCate";
import { useParams, Link } from "react-router-dom";
const ScrapCategory = () => {
  const params = useParams();
  const btnRef = useRef([]);
  const dispatch = useDispatch();
  useEffect(() => {
    btnRef.current.forEach((item, idx) => {
      if (item.innerText.toLowerCase() === params.id) {
        btnRef.current[idx].scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }, []);
  return (
    <QuickButtonWrap id="scroll-container">
      {_.map(mainCategory, (category, idx) => {
        return (
          <Link
            to={`/quick${category.path}`}
            key={category.id}
            id={category.id}
          >
            <RadiusBlackButton
              orange={params.id === category.id}
              ref={(el) => (btnRef.current[idx] = el)}
              onClick={() => {
                dispatch(isLoading(true));
              }}
            >
              {category.category}
            </RadiusBlackButton>
          </Link>
        );
      })}
    </QuickButtonWrap>
  );
};
export default ScrapCategory;
