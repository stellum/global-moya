import React, { useState, useEffect } from "react";
import HightLightText from "@components/HightLightText";
import Spinner from "@components/common/Spinner";

import { filterValue } from "../../../util/filterMasterFunc";
import Highlighter from "react-highlight-words";
import _ from "lodash";
import {
  HighLightLi,
  KeywordUL,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import { SearchIcon } from "@styles/svgIcon";
import { colors } from "@styles/theme";

const HiglightKeyword = ({ dataList, keyword, loading }) => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  useEffect(() => {
    const data = filterValue(dataList, keyword);
    setFilterKeyword(data);
  }, [keyword]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <KeywordUL>
          {_.map(filterKeyword.slice(0, 40), (item) => (
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
                &npsp (
                <Highlighter
                  textToHighlight={item.paramValue}
                  searchWords={[keyword]}
                  highlightStyle={{
                    color: `${colors.pointOrange200}`,
                    backgroundColor: "transparent",
                  }}
                />
                )
              </HightLightText>
            </HighLightLi>
          ))}
        </KeywordUL>
      )}
    </>
  );
};

export default HiglightKeyword;
