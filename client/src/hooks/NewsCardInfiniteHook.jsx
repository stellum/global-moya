import { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoading } from "@redux/categorySlice";
import { fetchSearchNews } from "@redux/searchFilterSlice";
import { getSearchData } from "@api/searchApi";
const NewsCardInfiniteHook = (
  setPage,
  loading,
  setErrorMsg,
  setPageToken,
  setNewsList,
  page,
  pageToken,
  location,
  newsList
) => {
  const dispatch = useDispatch();
  const observer = useRef(null);
  const { timeFilter, mediaType, language, orderBy } = useSelector(
    (state) => state.searchFilterSlice
  );
  const nextQueryParams = {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType: `${location.state.category}`,
    paramValue: `${location.state.paramValue}`,
    exchange: `${location.state.exchange ? location.state.exchange : null}`,
    nextPageToken: `${pageToken ? pageToken : null}`,
  };
  const getMoreNews = async () => {
    const res = await getSearchData(nextQueryParams);
    console.log(res);
  };
  useEffect(() => {
    // dispatch(isLoading(true));
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
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
        console.log("마지막");
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  return { lastElementRef };
};

export default NewsCardInfiniteHook;
