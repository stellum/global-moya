import React, { useCallback, useState, useRef } from "react";

const NewsCardInfiniteHook = (setPage, loading) => {
  const observer = useRef(null);

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
