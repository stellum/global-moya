import React, { useState, useEffect } from "react";
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
  // const getTermSeq = createTermSeq(4);

  // const rootStorage = JSON.parse(localStorage["persist:root"]);
  // const keywordSlice = JSON.parse(rootStorage["keywordConnectedSlice"]);
  // const keywordNameList = keywordSlice.keywordNameList;
  // const { keywordNameList } = useSelector(
  //   (state) => state.keywordConnectedSlice
  // );
  // const [items, setItems] = useState(keywordNameList);

  // const [keywordNameList, setKeywordNameList] = useState([]);
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState([]);
  const [newTerm, setTermSeq] = useState([]);
  const navigate = useNavigate();

  const showEditBtn = useSelector((state) => state.buttonSlice.showEditBtn);
  const showDelBtn = useSelector((state) => state.buttonSlice.showDelBtn);

  const dispatch = useDispatch();
  const toggleModal = () => {
    console.log(showEditBtn);
    dispatch(toggleEditAction(!showEditBtn));
    navigate("/main");
  };

  const handleDelete = () => {
    // console.log("handleDel");
  };

  useEffect(() => {
    const getDatas = async () => {
      const response = await getKeywords();
      if (response.length > 0) {
        setItems(response);
        setTermSeq(createTermSeq(response.length));
      }
    };
    getDatas();

    return () => {
      console.log("unMounted");
    };
  }, []);
  useEffect(() => {
    console.log(newTerm);
  }, [newTerm]);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        console.log("item,old,new", items, oldIndex, newIndex);
        setNewItems(items);
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
              {/* {keywordNameList &&
                items.map((item) => (
                  <KeywordSortableItem key={item.id} item={item} />
                ))} */}
            </EditUl>
            <EditButtonDiv>
              <EditButtonCancel onClick={toggleModal}>취소</EditButtonCancel>
              {showDelBtn ? (
                <EditButtonDelete onClick={handleDelete}>삭제</EditButtonDelete>
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
