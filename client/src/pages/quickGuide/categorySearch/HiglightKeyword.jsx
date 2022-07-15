import React, { useState, useEffect } from "react";
import HightLightText from "@components/HightLightText";
import Spinner from "@components/common/Spinner";

import { filterValue } from "@util/filterMasterFunc";
import Highlighter from "react-highlight-words";
import _ from "lodash";
import {
  HighLightLi,
  KeywordUL,
  IconWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import { SearchIcon, StarIcon } from "@styles/svgIcon";
import { colors } from "@styles/theme";
import { deleteKeywordFunc, createKeywordFunc, checkClip } from "@util";
import AccessToken from "@hoc/AccessToken";
const HiglightKeyword = ({
  dataList,
  keyword,
  loading,
  category,
  accessToken,
  reports,
  setFillStar,
}) => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  useEffect(() => {
    const data = filterValue(dataList, keyword);
    setFilterKeyword(data);
  }, [keyword]);

  const handleFillStar = (_id, category, accessToken, reports) => {
    setFillStar((prev) => !prev);
    if (checkClip(reports, _id, category)) {
      deleteKeywordFunc(_id, category, accessToken, reports);
    } else {
      createKeywordFunc(_id, category, accessToken);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <KeywordUL>
          {_.map(filterKeyword.slice(0, 40), (item, idx) => (
            <HighLightLi key={item._id}>
              <IconWrap>
                <SearchIcon />
              </IconWrap>
              <HightLightText>
                <Highlighter
                  textToHighlight={item.name}
                  searchWords={[keyword]}
                  highlightStyle={{
                    color: `${colors.pointOrange200}`,
                    backgroundColor: "transparent",
                  }}
                />{" "}
                (
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
              <IconWrap star>
                <StarIcon
                  onClick={() => {
                    handleFillStar(item._id, category, accessToken, reports);
                  }}
                  $clip={checkClip(reports, item._id)}
                />
              </IconWrap>
            </HighLightLi>
          ))}
        </KeywordUL>
      )}
    </>
  );
};

export default AccessToken(HiglightKeyword);
