import React from "react";
import {
  H2Tag,
  ButtonWrapForm,
  ApplyBtn,
  FilterInner,
  SelectForm,
  PublishForm,
  SortForm,
  PublishWrap,
  FilterWrap,
} from "@styles/filterStyle/filterStyle";
import { published, mediaType } from "./searchParam";
const SearchTypeFilter = ({ showModal, showBtn }) => {
  return (
    <>
      {showBtn && (
        <FilterWrap className={showModal.sort ? "showModal" : "hideModal"}>
          <FilterInner>
            <H2Tag>언론사 종류</H2Tag>
            <SelectForm>
              {mediaType.map((item, idx) => (
                <div key={item.mediaType}>
                  <input
                    type="radio"
                    name="newsRadio"
                    id={item.mediaType}
                    defaultChecked={!idx}
                  />
                  <label htmlFor={item.mediaType}>{item.text}</label>
                </div>
              ))}
            </SelectForm>
            <H2Tag>발행일</H2Tag>
            <PublishForm>
              {published.map((item, idx) => (
                <PublishWrap key={item.timeType}>
                  <label htmlFor={item.timeType}>
                    <input
                      type="radio"
                      name="publishRadio"
                      id={item.timeType}
                      defaultChecked={!idx}
                    />
                    <span className="publish-btn">{item.text}</span>
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
            <ButtonWrapForm>
              <ApplyBtn>취소</ApplyBtn>
              <ApplyBtn apply>적용하기</ApplyBtn>
            </ButtonWrapForm>
          </FilterInner>
        </FilterWrap>
      )}
    </>
  );
};

export default SearchTypeFilter;
