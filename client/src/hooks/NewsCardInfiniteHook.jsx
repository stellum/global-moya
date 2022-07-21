import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoading } from "@redux/categorySlice";
import { fetchSearchNews } from "@redux/searchFilterSlice";
import { getSearchData } from "@api/searchApi";
const NewsCardInfiniteHook = (setPage, page, location) => {
  const [newsList, setNewsList] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoaidng] = useState(true);
  const observer = useRef(null);
  const { timeFilter, mediaType, language, orderBy } = useSelector(
    (state) => state.searchFilterSlice
  );
  const QueryParams = {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType: `${location.category}`,
    paramValue: `${location.paramValue}`,
    exchange: `${location.exchange ? location.exchange : null}`,
  };
  const nextQueryParams = {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType: `${location.category}`,
    paramValue: `${location.paramValue}`,
    exchange: `${location.exchange ? location.exchange : null}`,
    nextPageToken: `${pageToken}`,
  };
  const getMoreNews = async () => {
    const res = await getSearchData(page > 1 ? nextQueryParams : QueryParams);
    console.log(res);
    if (res.newsList.length > 0) {
      setLoaidng(false);
      setNewsList((prev) => [...prev, ...res.newsList]);
      setPageToken(res.nextPageToken);
    }
  };
  useEffect(() => {
    console.log("pageToken", pageToken);
    console.log("hookloading", loading);
    console.log(page);
    // dispatch(isLoading(true));
    getMoreNews();
    // getMoreNews();
    // const getDatas = async () => {
    //   await dispatch(fetchSearchNews({ nextQueryParams })).then((response) => {
    //     console.log(response);
    //     if (response.payload.status === 400) {
    //       setErrorMsg("결과가 없습니다.");
    //     } else {
    //       setNewsList([...newsList, ...response.payload.newsList]);
    //       setPageToken(response.payload.nextPageToken);
    //     }
    //     dispatch(isLoading(false));
    //   });
    // };
    // const timeoutID = setTimeout(() => {
    //   getDatas();
    // }, 2000);
    // return () => {
    //   console.log("unMounted 카드");
    //   clearTimeout(timeoutID);
    // };
  }, [page]);

  const lastElementRef = useCallback((node) => {
    // console.log(node);
    // if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);

        console.log("마지막");
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  return { lastElementRef, newsList, loading, errorMsg };
};

export default NewsCardInfiniteHook;
