import React from "react";
import { FilterModalStyle } from "../styles/filterStyle/filterModal";
const FilterModal = ({ show, children }) => {
  return <FilterModalStyle show={show}>{children}</FilterModalStyle>;
};

export default FilterModal;
