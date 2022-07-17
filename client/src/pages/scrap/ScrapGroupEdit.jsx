//스크랩 그룹 편집 : 순서변경,이름변경, 삭제
import React, { useState, useRef, useInput } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { createFolder } from "@api/bookmarkApi";
import AccessToken from "@hoc/AccessToken";

import {
  FixedHeader,
  BtnWrap,
  CompleteBtn,
  ApplyBtn,
  ButtonWrapDiv,
} from "@styles/scrap/scrap";
import { BackArrow, NewGroupPlus } from "@styles/svgIcon";
const ScrapGroupEdit = () => {
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
