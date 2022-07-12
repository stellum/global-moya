import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import Hamburger from "../common/Hamburger";
import Checkbox from "../common/Checkbox";
import { DeleteIcon } from "@styles/svgIcon";
import { colors, fontSize } from "@styles/theme";

const GroupList = forwardRef((props, ref) => {
  const { text } = props;
  const { type } = props;
  const [checked, setChecked] = useState(false);

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  const handleInput = (e) => {
    console.log("e", e.target.value);
  };

  return (
    <GroupWrap>
      {/* <DeleteIcon /> */}

      {/* <CheckInput type="checkbox" id="deleteCheck" /> */}
      {/* <CheckLabel htmlFor="deleteCheck" /> */}

      <Checkbox />

      <GroupTextWrap type={type}>
        {type === "keyword" ? (
          <TextKeyword>{text}</TextKeyword>
        ) : (
          <InputGroup
            type="text"
            placeholder="그룹명을 바꿔주세요."
            defaultValue={text}
            onChange={handleInput}
          />
        )}
      </GroupTextWrap>
      <HamburgerWrap ref={ref}>
        <Hamburger />
      </HamburgerWrap>
    </GroupWrap>
  );
});

export default GroupList;

const GroupWrap = styled.div`
  width: 100%;
  height: 48px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  position: relative;
`;
// const IconWrap = styled.div`
//   width: 48px;
//   display: flex;
//   justify-content: center;
//   svg {
//     height: 20px;
//   }
//   cursor: pointer;
// `;
const GroupTextWrap = styled.div`
  ${(props) => {
    if (props.type === "group") {
      return `
        border: 1px solid ${colors.gray250};    
      `;
    }
    if (props.type === "keyword") {
      return `
        border: 0;
      `;
    }
  }}
  padding: 7px 10px;
  border-radius: 4px;
`;
const HamburgerWrap = styled.div`
  width: 48px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const TextKeyword = styled.h4``;

const InputGroup = styled.input`
  font-size: ${fontSize.FontSize16};
`;
