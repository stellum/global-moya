import React from "react";
import {
  FilterModal,
  ViewWrapForm,
  H2Tag,
  VerticalView,
  HorizontalView,
  SelectForm,
  PublishWrap,
  PublishForm,
  SortForm,
  ButtonForm,
  ApplyBtn,
  FilterWrap,
  FilterInner,
} from "@styles/filterStyle/filterStyle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleModalAction } from "../../redux/reducer/modalSlice";
import { cardTypeAction } from "../../redux/reducer/cardTypeSlice";
import { MagazineDisable, TextDisable, CardDisable } from "@styles/svgIcon";

const published = ["한 달", "일주일", "하루", "1시간", "15분", "5분"];
const FilterComponent = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modalSlice.showModal);
  const handleCardType = (e) => {
    dispatch(cardTypeAction(e.target.id));
  };
  return (
    <>
      <FilterWrap className={`Modal ${show ? "Show" : ""}`}>
        <FilterModal>
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
            <H2Tag>언론사 종류</H2Tag>
            <SelectForm>
              <div>
                <input type="radio" name="newsRadio" id="all" defaultChecked />
                <label htmlFor="all">All</label>
              </div>
              <div>
                <input type="radio" name="newsRadio" id="mo" />
                <label htmlFor="mo">Major & Others</label>
              </div>
              <div>
                <input type="radio" name="newsRadio" id="major" />
                <label htmlFor="major">Major</label>
              </div>
              <div>
                <input type="radio" name="newsRadio" id="others" />
                <label htmlFor="others">Others</label>
              </div>
              <div>
                <input type="radio" name="newsRadio" id="research" />
                <label htmlFor="research">Research</label>
              </div>
            </SelectForm>
            <H2Tag>발행일</H2Tag>
            <PublishForm>
              {published.map((item, idx) => (
                <PublishWrap key={item}>
                  <label htmlFor={item}>
                    <input
                      type="radio"
                      name="publishRadio"
                      id={item}
                      defaultChecked={!idx}
                    />
                    <span className="publish-btn">{item}</span>
                  </label>
                </PublishWrap>
              ))}
            </PublishForm>
            <H2Tag>정렬</H2Tag>
            <SortForm>
              <div>
                <input
                  type="radio"
                  name="sortRadio"
                  id="latest"
                  defaultChecked
                />
                <label htmlFor="latest">최신순</label>
              </div>
              <div>
                <input type="radio" name="sortRadio" id="popular" />
                <label htmlFor="popular">인기순</label>
              </div>
            </SortForm>
            <ButtonForm
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <ApplyBtn onClick={() => dispatch(toggleModalAction(!show))}>
                취소
              </ApplyBtn>
              <ApplyBtn
                apply
                onClick={() => dispatch(toggleModalAction(!show))}
              >
                적용하기
              </ApplyBtn>
            </ButtonForm>
          </FilterInner>
        </FilterModal>
      </FilterWrap>
    </>
  );
};

export default FilterComponent;
