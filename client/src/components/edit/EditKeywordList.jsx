import React, { useState, useCallback } from "react";
import update from "immutability-helper";
import EditKeyword from "./EditKeyword";
import {
  EditKeywordContainer,
  EditKeywordHeader,
  EditKeywordUl,
} from "@styles/edit/editKeyword";

const EditKeywordList = () => {
  const [keywordItems, setKeywordItems] = useState([
    {
      id: 1,
      text: "Test Keyword 1",
    },
    {
      id: 2,
      text: "Test Keyword 2",
    },
    {
      id: 3,
      text: "Test Keyword 3",
    },
    {
      id: 4,
      text: "Test Keyword 4",
    },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setKeywordItems((prevKeywordItems) =>
      update(prevKeywordItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevKeywordItems[dragIndex]],
        ],
      })
    );
  }, []);

  const renderKeyword = useCallback((item, index) => {
    return (
      <EditKeyword
        key={item.id}
        index={index}
        id={item.id}
        text={item.text}
        moveCard={moveCard}
      />
    );
  }, []);

  return (
    <>
      <EditKeywordContainer>
        <EditKeywordHeader>키워드 편집</EditKeywordHeader>
        <EditKeywordUl>{keywordItems.map((item, index) => renderKeyword(item, index))}</EditKeywordUl>
      </EditKeywordContainer>
    </>
  );
};

export default EditKeywordList;
