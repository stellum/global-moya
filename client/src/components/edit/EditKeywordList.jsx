import React, { useState, useCallback } from "react";
import update from "immutability-helper";
import EditKeyword from "./EditKeyword";
import {
  EditKeywordContainer,
  EditKeywordHeader,
  EditKeywordUl,
  EditButtonDiv,
  EditButtonCancel,
  EditButtonSave,
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
    {
      id: 5,
      text: "Test Keyword 5",
    },
    {
      id: 6,
      text: "Test Keyword 6",
    },
    {
      id: 7,
      text: "Test Keyword 7",
    },
    {
      id: 8,
      text: "Test Keyword 8",
    },
    {
      id: 9,
      text: "Test Keyword 9",
    },
    {
      id: 10,
      text: "Test Keyword 10",
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
        <EditButtonDiv>
          <EditButtonCancel>취소</EditButtonCancel>
          <EditButtonSave>저장</EditButtonSave>
        </EditButtonDiv>
      </EditKeywordContainer>
    </>
  );
};

export default EditKeywordList;
