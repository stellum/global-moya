import React, { useState } from "react";
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
import { toggleEditAction } from "@redux/modalSlice";
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

const EditKeywordContext = () => {
  // const rootStorage = JSON.parse(localStorage["persist:root"]);
  // const keywordSlice = JSON.parse(rootStorage["keywordConnectedSlice"]);
  // const keywordNameList = keywordSlice.keywordNameList;
  const { keywordNameList } = useSelector(
    (state) => state.keywordConnectedSlice
  );
  const [items, setItems] = useState(keywordNameList);

  // const [items, setItems] = useState([
  //   {
  //     id: "abca",
  //     keyword: "Keyword 1",
  //   },
  //   {
  //     id: "abcb",
  //     keyword: "Keyword 2",
  //   },
  //   {
  //     id: "abcc",
  //     keyword: "Keyword 3",
  //   },
  //   {
  //     id: "abcd",
  //     keyword: "Keyword 4",
  //   },
  // ]);
  const navigate = useNavigate();

  const showEditBtn = useSelector((state) => state.modalSlice.showEditBtn);
  const showDelBtn = useSelector((state) => state.buttonSlice.showDelBtn);

  const dispatch = useDispatch();
  const toggleModal = () => {
    console.log(showEditBtn);
    dispatch(toggleEditAction(!showEditBtn));
    navigate("/main");
  };

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        // console.log("item,old,new", items, oldIndex, newIndex);
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
              <EditCount>8/10</EditCount>
            </EditHeaderContainer>
            <EditUl>
              {keywordNameList &&
                items.map((item) => (
                  <KeywordSortableItem key={item.id} item={item} />
                ))}
            </EditUl>
            <EditButtonDiv>
              <EditButtonCancel onClick={toggleModal}>취소</EditButtonCancel>
              {showDelBtn ? (
                <EditButtonDelete>삭제</EditButtonDelete>
              ) : (
                <EditButtonSave>저장</EditButtonSave>
              )}
            </EditButtonDiv>
          </EditContainer>
        </SortableContext>
      </DndContext>
    </EditContextWrap>
  );
};

export default EditKeywordContext;
