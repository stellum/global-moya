import { useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCategoryList } from "../api/masterApi";
import { addCategoryAction } from "../redux/reducer/categorySlice";
const QuickCategoryHook = (category, setPage) => {
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetch = async () => {
    const response = await getCategoryList(category);
    const data = response.details;
    dispatch(addCategoryAction(data));
    setPage(1);
  };

  useEffect(() => {
    fetch();
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
