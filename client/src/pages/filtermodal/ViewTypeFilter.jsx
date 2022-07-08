import React from "react";
import {
  ViewWrapForm,
  H2Tag,
  VerticalView,
  HorizontalView,
  ButtonWrap,
  ApplyBtn,
  FilterInner,
} from "@styles/filterStyle/filterStyle";
import { MagazineDisable, TextDisable, CardDisable } from "@styles/svgIcon";
import { useDispatch } from "react-redux";
import { cardTypeAction } from "../../redux/reducer/cardTypeSlice";

const ViewTypeFilter = () => {
  const dispatch = useDispatch();
  const handleCardType = (e) => {
    dispatch(cardTypeAction(e.target.id));
  };
  return (
    <>
      <FilterInner>
        <H2Tag>보기 타입</H2Tag>
        <ViewWrapForm>
          <HorizontalView>
            <label htmlFor="Magazine">
              <input
                type="radio"
                id="Magazine"
                name="newsRadio"
                onChange={handleCardType}
              />
              <MagazineDisable />
            </label>
            <label htmlFor="TextOnly">
              <input
                type="radio"
                id="TextOnly"
                name="newsRadio"
                defaultChecked
                onChange={handleCardType}
              />
              <TextDisable />
            </label>
          </HorizontalView>
          <VerticalView>
            <label htmlFor="CardType">
              <input
                type="radio"
                id="CardType"
                name="newsRadio"
                onChange={handleCardType}
              />
              <CardDisable />
            </label>
          </VerticalView>
        </ViewWrapForm>
        <ButtonWrap
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <ApplyBtn>취소</ApplyBtn>
          <ApplyBtn apply>적용하기</ApplyBtn>
        </ButtonWrap>
      </FilterInner>
    </>
  );
};

export default ViewTypeFilter;
