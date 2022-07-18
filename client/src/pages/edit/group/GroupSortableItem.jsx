import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Hamburger from "@components/common/Hamburger";
import Checkbox from "@components/common/Checkbox";

import {
  EditItemWrap,
  EditItemTextWrap,
  EditHamburgerWrap,
  EditInputGroup,
} from "@styles/edit/editKeyword";

// const GroupSortableItem = forwardRef((props, ref) => {
const GroupSortableItem = ({ item, type }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const [checked, setChecked] = useState(false);

  const handleCheckbox = (e) => {
    console.log("e", e);
    setChecked(e.target.checked);
  };

  const handleInput = (e) => {
    console.log("e", e.target.value);
  };

  return (
    <EditItemWrap style={style} {...attributes}>
      {/* <CheckInput type="checkbox" id="deleteCheck" /> */}
      {/* <CheckLabel htmlFor="deleteCheck" /> */}

      <Checkbox checked={checked} onChange={handleCheckbox} />

      <EditItemTextWrap type={type}>
        <EditInputGroup
          type="button"
          placeholder="그룹명을 바꿔주세요."
          defaultValue={item.keyword}
          onChange={handleInput}
        />
      </EditItemTextWrap>
      <EditHamburgerWrap ref={setNodeRef} {...listeners}>
        <Hamburger />
      </EditHamburgerWrap>
    </EditItemWrap>
  );
};

export default GroupSortableItem;
