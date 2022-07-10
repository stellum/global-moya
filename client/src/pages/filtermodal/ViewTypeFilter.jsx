import React, { useState } from "react";
import {
  ViewWrapForm,
  H2Tag,
  VerticalView,
  HorizontalView,
  ButtonWrapForm,
  ApplyBtn,
  FilterInner,
  InputWrap,
  FilterWrap,
} from "@styles/filterStyle/filterStyle";
import { MagazineDisable, TextDisable, CardDisable } from "@styles/svgIcon";
import { useDispatch } from "react-redux";
import { cardTypeAction } from "@redux/cardTypeSlice";
import { toggleBtnAction, toggleModalAction } from "@redux/modalSlice";
const ViewTypeFilter = ({ showModal, showBtn }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");

  const handleChange = (e) => {
    setType(e.target.id);
  };

  const handleCardType = (e) => {
    e.preventDefault();
    dispatch(toggleBtnAction(!showBtn));
    dispatch(toggleModalAction(""));
    if (e.target.id === "apply") {
      dispatch(cardTypeAction(type));
    } else {
      dispatch(toggleModalAction(""));
    }
  };
  return (
    <>
      {showBtn && (
        <FilterWrap className={showModal.view ? "showModal" : "hideModal"}>
          <FilterInner>
            <H2Tag>보기 타입</H2Tag>
            <ViewWrapForm>
              <InputWrap>
                <HorizontalView>
                  <label htmlFor="Magazine">
                    <input
                      type="radio"
                      id="Magazine"
                      name="newsRadio"
                      onChange={handleChange}
                    />
                    <MagazineDisable />
                  </label>
                  <label htmlFor="TextOnly">
                    <input
                      type="radio"
                      id="TextOnly"
                      name="newsRadio"
                      onChange={handleChange}
                      defaultChecked
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
                      onChange={handleChange}
                    />
                    <CardDisable />
                  </label>
                </VerticalView>
              </InputWrap>
            </ViewWrapForm>
            <ButtonWrapForm>
              <ApplyBtn id="cancel" onClick={handleCardType}>
                취소
              </ApplyBtn>
              <ApplyBtn id="apply" onClick={handleCardType} apply>
                적용하기
              </ApplyBtn>
            </ButtonWrapForm>
          </FilterInner>
        </FilterWrap>
      )}
    </>
  );
};

export default ViewTypeFilter;
