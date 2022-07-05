import React, { useEffect, useRef } from "react";
import { mainCategory } from "../category";
import { RadiusButton } from "@styles/buttonStyle/button";
import { useParams, Link } from "react-router-dom";
import { QuickButtonWrap } from "@styles/quickGuideStyle/quickCateStyle/quickCateStyle";
const QuickCateButton = () => {
  const params = useParams();
  const btnRef = useRef([]);

  useEffect(() => {
    btnRef.current.forEach((item, idx) => {
      if (item.innerText.toLowerCase() === params.id) {
        btnRef.current[idx].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, []);
  return (
    <QuickButtonWrap id="scroll-container">
      {mainCategory.map((category, idx) => {
        return (
          <Link
            to={`/quick${category.path}`}
            key={category.id}
            id={category.id}
          >
            <RadiusButton
              orange={params.id === category.id}
              ref={(el) => (btnRef.current[idx] = el)}
            >
              {category.category}
            </RadiusButton>
          </Link>
        );
      })}
    </QuickButtonWrap>
  );
};

export default QuickCateButton;
