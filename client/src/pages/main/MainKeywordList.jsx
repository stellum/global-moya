import React, { useState, useEffect, useRef } from "react";
// import { getSearchData } from "@api/searchApi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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
  MainKeywordActiveContentH2,
  EditIconDiv,
  EditIconCircle,
} from "@styles/main/mainKeywordList";
import { toggleEditAction } from "@redux/modalSlice";
import NewsCard from "@components/NewsCard";
import Spinner from "@components/common/Spinner";
import AccessToken from "@hoc/AccessToken";

const MainKeywordList = ({ view, apply, accessToken }) => {
  const [toggleTabState, setToggleTabState] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const rootStorage = JSON.parse(localStorage["persist:root"]);
  const keywordSlice = JSON.parse(rootStorage["keywordConnectedSlice"]);
  const keywordList = keywordSlice.keywordList;
  const keyTypeList = keywordSlice.keyTypeList;
  const paramValueList = keywordSlice.paramValueList;

  const effectMount = useRef(false);

  const dispatch = useDispatch();

  // ! card
  const { timeFilter, mediaType, language, orderBy, keyType, paramValue } =
    useSelector((state) => state.searchFilterSlice);
  const { status } = useSelector((state) => state.searchFilterSlice);

  const [newsList, setNewsList] = useState([]);
  const [pageToken, setPageToken] = useState("");

  // toggle btn
  const showEditBtn = useSelector((state) => state.modalSlice.showEditBtn);

  const toggleModal = () => {
    dispatch(toggleEditAction(!showEditBtn));
    navigate("/main/edit/keyword");
  };

  const toggleTab = async (index) => {
    setToggleTabState(index);
    await dispatch(
      keywordContentRequest([keyTypeList[index], paramValueList[index]])
    );

    // navigate(
    //   `/main?timeFilter=${timeFilter}&mediaType=${mediaType}&language=${language}&orderBy=${orderBy}&keyType=${keyType}&paramValue=${paramValue}`
    // );
  };

  useEffect(() => {
    if (effectMount.current === false) {
      // getDatas();
      console.log("첫실행");

      const getDatas = async () => {
        const queryParams = {
          timeFilter,
          mediaType,
          language,
          orderBy,
          keyType,
          paramValue,
        };

        await dispatch(fetchSearchNews(queryParams, accessToken)).then(
          (response) => {
            console.log("첫 response", response);
            setNewsList(response.payload.newsList);
            setPageToken(response.payload.nextPageToken);
          }
        );
      };

      const timeoutID = setTimeout(() => {
        getDatas();
      }, 2000);

      return () => {
        console.log("unMounted 카드");
        effectMount.current = true;
        clearTimeout(timeoutID);
      };
    }
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

        await dispatch(fetchSearchNews(queryParams, accessToken)).then(
          (response) => {
            console.log("두번째");
            console.log("res2", response);
            setNewsList(response.payload.newsList);
            setPageToken(response.payload.nextPageToken);
          }
        );
      };

      const timeoutID = setTimeout(() => {
        getDatas();
      }, 2000);

      return () => {
        console.log("clear time");
        clearTimeout(timeoutID);
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
                  toggleTab={toggleTabState === index}
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
                  <MainKeywordActiveContentH2>
                    Content {index + 1}
                  </MainKeywordActiveContentH2>
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
