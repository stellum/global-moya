import React, { useState } from "react";
import {
  H2Tag,
  ButtonWrapDiv,
  ApplyBtn,
  FilterInner,
  SelectForm,
  PublishForm,
  SortForm,
  PublishWrap,
  FilterWrap,
} from "@styles/filterStyle/filterStyle";
import { published, mediaTypeArr } from "./searchParam";
const SearchTypeFilter = ({ showModal, showBtn }) => {
  const [searchType, setSearchType] = useState({
    mediaType: "",
    timeFilter: "",
    orderBy: "",
  });

  const handleSearchType = (e) => {
    const { id, name } = e.target;
    setSearchType({
      ...searchType,
      [name]: id,
    });
    console.log(searchType);
  };
  return (
    <>
      {showBtn && (
        <FilterWrap className={showModal.sort ? "showModal" : "hideModal"}>
          <FilterInner>
            <H2Tag>언론사 종류</H2Tag>
            <SelectForm>
              {mediaTypeArr.map((item, idx) => (
                <div key={item.mediaType}>
                  <input
                    type="radio"
                    name="mediaType"
                    id={item.mediaType}
                    defaultChecked={!idx}
                    onChange={handleSearchType}
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
                      name="timeFilter"
                      id={item.timeType}
                      defaultChecked={!idx}
                      onChange={handleSearchType}
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
                  name="orderBy"
                  id="latest"
                  defaultChecked
                  onChange={handleSearchType}
                />
                <label htmlFor="latest">최신순</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="orderBy"
                  id="popular"
                  onChange={handleSearchType}
                />
                <label htmlFor="popular">인기순</label>
              </div>
            </SortForm>
            <ButtonWrapDiv>
              <ApplyBtn>취소</ApplyBtn>
              <ApplyBtn apply>적용하기</ApplyBtn>
            </ButtonWrapDiv>
          </FilterInner>
        </FilterWrap>
      )}
    </>
  );
};

export default SearchTypeFilter;
