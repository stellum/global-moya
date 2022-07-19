import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  keywordContentRequest,
  fetchSearchNews,
} from "@redux/searchFilterSlice";

import {
  MainKeywordContainerDiv,
  MainKeywordDiv,
  MainKeywordLi,
  MainKeywordUl,
  MainKeywordContentDiv,
  MainKeywordActiveContentDiv,
  EditIconDiv,
  EditIconCircle,
} from "@styles/main/mainKeywordList";
import { toggleEditAction } from "@redux/buttonSlice";
import NewsCard from "@components/NewsCard";
import Spinner from "@components/common/Spinner";
import AccessToken from "@hoc/AccessToken";

const MainKeywordList = ({ view, apply, accessToken }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [toggleTabState, setToggleTabState] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { timeFilter, mediaType, language, orderBy, keyType, paramValue } =
    useSelector((state) => state.searchFilterSlice);
  const { status } = useSelector((state) => state.searchFilterSlice);

  // toggle btn
  const showEditBtn = useSelector((state) => state.buttonSlice.showEditBtn);

  //local >> useSelector
  const rootStorage = JSON.parse(localStorage["persist:root"]);
  const keywordSlice = JSON.parse(rootStorage["keywordConnectedSlice"]);
  const keywordList = keywordSlice.keywordList;
  const keyTypeList = keywordSlice.keyTypeList;
  const paramValueList = keywordSlice.paramValueList;


  const toggleModal = () => {
    dispatch(toggleEditAction(!showEditBtn));
    navigate("/main/edit/keyword");
  };

  const toggleTab = async (index) => {
    // 0 > FALSE
    setToggleTabState(+index);
    await dispatch(
      keywordContentRequest([keyTypeList[index], paramValueList[index]])
    );
  };

  useEffect(() => {
    navigate(
      `/main?timeFilter=${timeFilter}&mediaType=${mediaType}&language=${language}&orderBy=${orderBy}&keyType=${keyType}&paramValue=${paramValue}`
    );
  }, [timeFilter, mediaType, language, orderBy, keyType, paramValue]);

  useEffect(() => {
    const getDatas = async () => {
      const queryParams = {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType,
        paramValue,
      };

      await dispatch(fetchSearchNews({ queryParams, accessToken })).then(
        (response) => {
          console.log("첫 response", response);
          if (response.payload.status === 400) {
            setErrorMsg("결과가 없습니다.");
          } else {
            setNewsList(response.payload.newsList);
            setPageToken(response.payload.nextPageToken);
          }
        }
      );
    };
    getDatas();

    return () => {
      console.log("unMounted 카드");
    };
  }, []);

  useEffect(() => {
    if (toggleTabState) {
      const getDatas = async () => {
        const queryParams = {
          timeFilter,
          mediaType,
          language,
          orderBy,
          keyType,
          paramValue,
        };

        await dispatch(fetchSearchNews({ queryParams, accessToken })).then(
          (response) => {
            setNewsList(response.payload.newsList);
            setPageToken(response.payload.nextPageToken);
          }
        );
      };

      getDatas();

      return () => {
        console.log("clear time");
      };
    }
  }, [toggleTabState]);

  return (
    <>
      <MainKeywordContainerDiv>
        <MainKeywordDiv>
          <MainKeywordUl>
            {keywordList.map((keyword) => {
              const { name, _id, index } = keyword;
              return (
                <MainKeywordLi
                  key={_id + name}
                  toggleTab={keyword.paramValue === paramValue}
                  onClick={() => toggleTab(index)}
                >
                  {name.length > 10 ? name.slice(0, 9) + "..." : name}
                </MainKeywordLi>
              );
            })}
          </MainKeywordUl>
          <EditIconDiv onClick={toggleModal}>
            <EditIconCircle />
            <EditIconCircle />
            <EditIconCircle marginRight="0px" />
          </EditIconDiv>
        </MainKeywordDiv>
        <MainKeywordContentDiv>
          {status === "Loading" ? (
            <Spinner />
          ) : (
            status === "complete" &&
            keywordList.map((keyword) => {
              const { _id, index, keyType } = keyword;
              return (
                <MainKeywordActiveContentDiv
                  key={_id + keyType}
                  toggleContent={toggleTabState === index}
                >
                  <NewsCard
                    key={index}
                    view={view}
                    apply={apply}
                    newsList={newsList}
                  />
                </MainKeywordActiveContentDiv>
              );
            })
          )}
        </MainKeywordContentDiv>
      </MainKeywordContainerDiv>
    </>
  );
};

export default AccessToken(MainKeywordList);
