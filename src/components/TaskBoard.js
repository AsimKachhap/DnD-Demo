import React from "react";

const TaskBoard = ({ bgColor, boardHeading }) => {
  return (
    <div
      className="py-2 rounded-md min-h-[300px] w-full mt-3"
      style={{ backgroundColor: bgColor }}
    >
      <h3 className="text-center  font-semibold   ">{boardHeading}</h3>
      <hr />
      <div></div>
    </div>
  );
};

export default TaskBoard;
