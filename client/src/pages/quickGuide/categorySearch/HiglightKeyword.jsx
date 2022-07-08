import React, { useState, useEffect, useRef } from "react";
import { filterValue } from "../../../util/filterMasterFunc";
import styled from "styled-components";
import Highlighter from "react-highlight-words";

const HiglightKeyword = ({ dataList, keyword }) => {
  const [filterKeyword, setFilterKeyword] = useState([]);
  const liRef = useRef([]);

  // useEffect(() => {
  //   liRef.current.forEach((item, idx) => {
  //     if (item.innerText.toLowerCase() === params.id) {
  //       btnRef.current[idx].scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     }
  //   });
  // }, []);
  useEffect(() => {
    let data = filterValue(dataList, keyword);
    setFilterKeyword(filterValue(dataList, keyword));
    // highlight(keyword);
    // console.log("data", data);
    let abc = data.map((item) =>
      item.name.replace(`/${keyword}/,"<span>${keyword}</span>"`)
    );
    // console.log(abc);
  }, [keyword]);

  // const highlightedText = (text, query) => {
  //   if (query !== "" && text.includes(query)) {
  //     const parts = text.split(new RegExp(`(${query})`, "gim"));

  //     return (
  //       <span>
  //         {parts.map((part, i) => (
  //           <span
  //             key={i}
  //             style={
  //               part.toLowerCase() === query.toLowerCase()
  //                 ? { color: "red" }
  //                 : {}
  //             }
  //           >
  //             {part}
  //           </span>
  //         ))}{" "}
  //       </span>
  //     );
  //   }

  //   return text;
  // };
  const Highlighted = ({ text = "", highlight = "" }) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts
          .filter((part) => part)
          .map((part, i) =>
            regex.test(part) ? (
              <mark key={i}>{part}</mark>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
      </span>
    );
  };

  return (
    <div>
      {filterKeyword.slice(0, 40).map((item, idx) => (
        <NameLi
          key={item._id}
          id="inputText"
          ref={(el) => (liRef.current[idx] = el)}
          $name={item.name}
          $keyword={keyword}
        >
          <Highlighter textToHighlight={item.name} searchWords={[keyword]} />
        </NameLi>
      ))}
    </div>
  );
};

export default HiglightKeyword;

const NameLi = styled.li``;
