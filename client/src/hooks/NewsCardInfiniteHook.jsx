import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
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
    if (res === undefined || res.newsList === undefined) {
      setErrorMsg("검색 결과를 찾을 수 없습니다.");
      setLoaidng(false);
    }

    if (res.newsList.length > 0) {
      setLoaidng(false);
      setNewsList((prev) => [...prev, ...res.newsList]);
      setPageToken(res.nextPageToken);
    }
  };

  useEffect(() => {
    getMoreNews();
  }, [page]);

  const lastElementRef = useCallback((node) => {
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
