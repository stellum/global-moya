import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
// import _ from "lodash";
// import swap from "lodash-move";
// import { useSprings, animated, interpolate } from "react-spring";
import GroupList from "@components/group/GroupList";

const EditKeyword = ({ index, id, text, moveCard }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "keyword",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "keyword",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),

    // 드래그가 완전히 끝났을때 실행됩니다. 보통 여기에서 Redux dispatch를 많이 실행시킵니다.
    // end: (item) => {
    //   console.log(`${index} should move to ${item.index}`);
    // },
  });

  const opacity = isDragging ? 0.5 : 1;
  drag(drop(ref));

  return (
    <GroupList
      ref={ref}
      style={{ opacity: opacity }}
      data-handler-id={handlerId}
      text={text}
      type="group"
    />
  );
};

export default EditKeyword;
