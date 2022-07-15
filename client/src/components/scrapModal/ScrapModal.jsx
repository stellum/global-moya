import React from "react";
import { ScrapModalStyle } from "@styles/scrap/ScrapModal";
const ScrapEditModal = ({ showScrapEditBtn, children }) => {
  return (
    <ScrapModalStyle showScrapEditBtn={showScrapEditBtn}>
      {children}
    </ScrapModalStyle>
  );
};

export default ScrapEditModal;
