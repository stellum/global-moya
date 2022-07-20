import React, { useState, useEffect } from "react";
import AccessToken from "@hoc/AccessToken";
import { allFolder } from "@api/scrapFolderApi";

const ScrapMoveModal = ({ accessToken }) => {
  const [folder, setFolder] = useState([]);
  const getDatas = async () => {
    const response = await allFolder(accessToken);
    setFolder(response.reports);
    console.log("올폴더 반환", response.reports);
  };
  useEffect(() => {
    getDatas();
  }, []);

  return <>{folder && folder.map((group) => <div>{group.groupName}</div>)}</>;
};
export default AccessToken(ScrapMoveModal);
