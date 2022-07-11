import React from "react";
import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import EditKeywordList from "@components/edit/EditKeywordList";

const EditProvider = () => {
  const options = {
    enableTouchEvents: true,
    enableMouseEvents: true,
  };
  return (
    <>
      <DndProvider backend={TouchBackend} options={options}>
        <EditKeywordList />
      </DndProvider>
    </>
  );
};

export default EditProvider;
