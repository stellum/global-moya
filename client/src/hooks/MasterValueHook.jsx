import { useState, useCallback, useEffect } from "react";
import { filterValue } from "../functions/filterMasterFunc";
import getMasterData from "../api/masterApi";

const MasterValueHook = (searchWord) => {
  const [filteredResult, setFilteredResult] = useState([]);
  const [masterData, setMasterData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const data = await getMasterData();
      setMasterData(data);
    };
    fetch();
  }, []);

  let resultParamValue = new Set();

  const getParamValueFunc = useCallback(() => {
    Object.keys(masterData).forEach((key) => {
      // console.log(key);
      let objKey = masterData[key];
      let resultValue = filterValue(objKey, searchWord);
      resultParamValue = [
        ...resultParamValue,
        {
          mainCate: key,
          filtered: resultValue,
        },
      ];
      setFilteredResult(resultParamValue);
    });
  }, [filteredResult, searchWord]);

  useEffect(() => {
    getParamValueFunc();
    if (searchWord.length <= 0) {
      setFilteredResult([]);
    }
  }, [searchWord]);

  return { filteredResult, getParamValueFunc };
};

export default MasterValueHook;
