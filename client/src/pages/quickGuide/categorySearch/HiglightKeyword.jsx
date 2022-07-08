import React, { useState, useEffect } from "react";
import { filterValue } from "../../../util/filterMasterFunc";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
import { HighLightLi } from "@styles/quickGuide/categorySearch/LvKeywordList";
import { SearchIcon } from "@styles/svgIcon";
import HightLightText from "@components/HightLightText";
import { colors } from "@styles/theme";
const HiglightKeyword = ({ dataList, keyword }) => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  useEffect(() => {
    setFilterKeyword(filterValue(dataList, keyword));
  }, [keyword]);

  return (
    <ul>
      {filterKeyword.slice(0, 40).map((item) => (
        <HighLightLi key={item._id}>
          <SearchIcon />
          <HightLightText>
            <Highlighter
              textToHighlight={item.name}
              searchWords={[keyword]}
              highlightStyle={{
                color: `${colors.pointOrange200}`,
                backgroundColor: "transparent",
              }}
            />
          </HightLightText>
        </HighLightLi>
      ))}
    </ul>
  );
};

export default HiglightKeyword;
