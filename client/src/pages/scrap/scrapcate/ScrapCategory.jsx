//스크랩뉴스 카테고리
import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccessToken from "@hoc/AccessToken";
import { allFolder } from "@api/scrapFolderApi";
import { isLoading } from "@redux/categorySlice";
import { QuickButtonWrap } from "@styles/scrap/scrapcate";
import _ from "lodash";
import {
  DefaultButton,
  CategoryButton,
  ScrapButton,
  RadiusBlackButton,
} from "@styles/common/button/button";
import { useState } from "react";

const ScrapCategory = ({ black }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [folder, setFolder] = useState([]);
  const getDatas = async () => {
    const response = await allFolder();
    setFolder(response.reports);
    console.log("올폴더 반환", response.reports);
  };
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <>
      <QuickButtonWrap id="scroll-container">
        <Link to="/scrap">
          <RadiusBlackButton
            className="all"
            black={black}
            onClick={() => {
              dispatch(isLoading(true));
            }}
          >
            전체
          </RadiusBlackButton>
        </Link>
        {folder.map((group) => (
          <Link
            to={`/scrap/${group.groupId}`}
            key={group.groupId}
            id={group.groupId}
          >
            <RadiusBlackButton
              black={params.id == group.groupId}
              onClick={() => {
                dispatch(isLoading(true));
                dispatch(isLoading(true));
              }}
            >
              {group.groupName}
            </RadiusBlackButton>
          </Link>
        ))}
      </QuickButtonWrap>
    </>
  );
};
export default AccessToken(ScrapCategory);
