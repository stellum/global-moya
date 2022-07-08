import React from "react";
import {
  H2Tag,
  ButtonWrap,
  ApplyBtn,
  FilterInner,
  SelectForm,
  PublishForm,
  SortForm,
  PublishWrap,
} from "@styles/filterStyle/filterStyle";
import { published, media } from "./searchParam";
const SearchTypeFilter = () => {
  return (
    <FilterInner>
      <H2Tag>언론사 종류</H2Tag>
      <SelectForm>
        {media.map((item, idx) => (
          <div key={item}>
            <input
              type="radio"
              name="newsRadio"
              id={item}
              defaultChecked={!idx}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
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
          <input type="radio" name="sortRadio" id="latest" defaultChecked />
          <label htmlFor="latest">최신순</label>
        </div>
        <div>
          <input type="radio" name="sortRadio" id="popular" />
          <label htmlFor="popular">인기순</label>
        </div>
      </SortForm>
      <ButtonWrap>
        <ApplyBtn>취소</ApplyBtn>
        <ApplyBtn apply>적용하기</ApplyBtn>
      </ButtonWrap>
    </FilterInner>
  );
};

export default SearchTypeFilter;
