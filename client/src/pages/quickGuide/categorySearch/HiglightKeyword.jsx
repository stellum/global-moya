import React, { useState, useEffect } from "react";
import HightLightText from "@components/HightLightText";
import Spinner from "@components/common/Spinner";
import AddKeywordModal from "@components/addKeywordModal/AddKeywordModal";
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

const HiglightKeyword = ({
  dataList,
  keyword,
  loading,
  category,
  accessToken,
  clipKeyword,
  setFillStar,
  resultMsg,
  setResultMsg,
  reportsLength,
}) => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  useEffect(() => {
    const data = filterValue(dataList, keyword);
    setFilterKeyword(data);
  }, [keyword]);

  const handleFillStar = (_id, category, accessToken, clipKeyword) => {
    setFillStar((prev) => !prev);
    if (checkClip(clipKeyword, _id)) {
      deleteKeywordFunc(_id, category, accessToken, clipKeyword);
    } else {
      createKeywordFunc(_id, category, accessToken);
      setResultMsg(true);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AddKeywordModal
            resultMsg={resultMsg}
            reportsLength={reportsLength}
          />
          <KeywordUL>
            {_.map(filterKeyword.slice(0, 40), (item, idx) => (
              <HighLightLi key={item._id}>
                <IconWrap>
                  <SearchIcon />
                </IconWrap>
                <HightLightText
                  paramValue={item.paramValue}
                  category={category}
                  exchange={item.exchange}
                >
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
                      handleFillStar(
                        item._id,
                        category,
                        accessToken,
                        clipKeyword
                      );
                    }}
                    $clip={checkClip(clipKeyword, item._id)}
                  />
                </IconWrap>
              </HighLightLi>
            ))}
          </KeywordUL>
        </>
      )}
    </>
  );
};

export default HiglightKeyword;
