//스크랩 그룹 편집 : 순서변경,이름변경, 삭제
import React, { useState, useRef, useInput } from "react";
import { useNavigate, Link } from "react-router-dom";
//import { createFolder } from "@api/bookmarkApi";
import AccessToken from "@hoc/AccessToken";
import { FixedHeader, BtnWrap } from "@styles/scrap/scrap";
import { ApplyBtn, ButtonWrapDiv } from "@styles/scrap/scrapnews";
import { BackArrow, NewGroupPlus } from "@styles/svgIcon";
import GroupList from "@components/group/GroupList";
const ScrapGroupEdit = () => {
  const navigate = useNavigate();
  return (
    <>
      <FixedHeader>
        <div>
          <div onClick={() => navigate(-1)}>
            <BackArrow />
          </div>
          <h3>그룹 편집</h3>
          <Link to="/newfolder">
            <button>
              <NewGroupPlus />
            </button>
          </Link>
        </div>
      </FixedHeader>
      {/* 여기에 그룹 카테고리 리스트 map*/}
      <GroupList />
      <BtnWrap>
        <ButtonWrapDiv>
          <ApplyBtn>취소</ApplyBtn>
          <ApplyBtn apply>저장</ApplyBtn>
        </ButtonWrapDiv>
      </BtnWrap>
    </>
  );
};
export default AccessToken(ScrapGroupEdit);
