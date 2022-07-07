import { useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCategoryList } from "../api/masterApi";
import { addLvCateAction } from "../redux/reducer/categorySlice";
import { useQuery } from "react-query";
const QuickCategoryHook = (category, setPage) => {
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // const { data, isLoading } = useQuery("lvData", () =>
  //   getCategoryList(category)
  // );

  // const fetch = async () => {
  //   const response = await getCategoryList(category);
  //   const data = response.details;
  //   dispatch(addCategoryAction(data));
  //   setPage(1);
  // };
  // console.log(data);
  useEffect(() => {
    // if (!isLoading) {
    //   console.log(data);
    //   dispatch(addCategoryAction(data));
    // }
  }, []);

  const observer = useRef(null);

  const lastElementRef = useCallback((node) => {
    // if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
        console.log("observer");
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  return { lastElementRef };
};

export default QuickCategoryHook;
