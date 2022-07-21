import React, { useState, useEffect, useMemo } from "react";
import { getKeywords } from "@api/keywordListApi";

import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleEditAction } from "@redux/buttonSlice";
import {
  EditContextWrap,
  EditContainer,
  EditHeaderContainer,
  EditBack,
  EditHeader,
  EditCount,
  EditUl,
  EditButtonDiv,
  EditButtonCancel,
  EditButtonSave,
  EditButtonDelete,
} from "@styles/edit/editKeyword";
import { BackArrow } from "@styles/svgIcon";
import KeywordSortableItem from "./KeywordSortableItem";
import { createTermSeq } from "@util/createTermSeq";

const EditKeywordContext = ({}) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const showEditBtn = useSelector((state) => state.buttonSlice.showEditBtn);
  const showDelBtn = useSelector((state) => state.buttonSlice.showDelBtn);

  const TermSeq = useMemo(() => createTermSeq(items.length), [items]);

  const dispatch = useDispatch();
  const toggleModal = () => {
    console.log(showEditBtn);
    dispatch(toggleEditAction(!showEditBtn));
    navigate("/main");
  };

  // const handleDelete = () => {
  //   // console.log("handleDel");
  // };

  const getDatas = async () => {
    const response = await getKeywords(accessToken);
    setItems(response);
  };

  useEffect(() => {
    if (!items.length) getDatas();
  }, [items]);

  useEffect(() => {
    console.log(TermSeq);
  }, [TermSeq]);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        // 밀리는 것도 변경에 포함이 되는경우 >> 1개만 변경되는 경우는 없음.
        const Min = oldIndex > newIndex ? newIndex : oldIndex;
        const Max = oldIndex > newIndex ? oldIndex : newIndex;

        for (let i = 0; i < items.length; i++) {
          if (i >= Min && i <= Max) {
            items[i].updateFlag = "S";
          }
        }

        // 변경된 것만
        // items[newIndex].updateFlag = "S"

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const handleDragStart = (event) => {
    // console.log("start", event);
  };
  const handleDragMove = (event) => {
    // console.log("Move", event);
  };
  const handleDragOver = (event) => {
    // console.log("Over", event);
  };
  const handleDragCancel = (event) => {
    // console.log("Cancel", event);
  };

  const saveTermSeq = () => {
    let SNum = 0;
    let termItem = items.map((item, idx) => {
      item.termSeq = Term[idx];
      if (item.updateFlag === "S") SNum++;
      return item;
    });
    console.log("termItem : ", termItem, " & SNum : ", SNum);
    if (!SNum) {
      return alert("변경 값이 없습니다.");
    } else if (SNum === 1) {
      return alert("한개 변경.");
    } else {
      return alert("다수 변경.");
    }
  };

  /*
    체크 박스 교체
    1. items의 길이만큼 []; >> useState
    2. true : check, fasle : unCheck
    3. [check, check, uncheck, check .... ]
    4. 클릭. item[idx] = !item[idx]
  */

  return (
    <EditContextWrap showEditBtn={showEditBtn}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragOver={handleDragOver}
        onDragCancel={handleDragCancel}
        onDragEnd={handleDragEnd}
        autoScroll={{ threshold: { x: 0, y: 0 } }}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <EditContainer>
            <EditHeaderContainer>
              <EditBack onClick={toggleModal}>
                <BackArrow />
              </EditBack>
              <EditHeader>키워드 편집</EditHeader>
              <EditCount>{items && items.length}/10</EditCount>
            </EditHeaderContainer>
            <EditUl>
              {items.map((item) => (
                <KeywordSortableItem
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                />
              ))}
            </EditUl>
            <EditButtonDiv>
              <EditButtonCancel onClick={toggleModal}>취소</EditButtonCancel>
              {showDelBtn ? (
                <EditButtonDelete onClick={handleDelete}>삭제</EditButtonDelete>
              ) : (
                <EditButtonSave onClick={() => saveTermSeq()}>
                  저장
                </EditButtonSave>
              )}
            </EditButtonDiv>
          </EditContainer>
        </SortableContext>
      </DndContext>
    </EditContextWrap>
  );
};

export default EditKeywordContext;
