import React from "react";
import { FilterModalStyle } from "@styles/filterStyle/filterModal";
const FilterIconModal = ({ show, children }) => {
  return <FilterModalStyle show={show}>{children}</FilterModalStyle>;
};

export default FilterIconModal;
