import React from "react";
import Header from "../components/Header";
import TaskBoard from "../components/TaskBoard";

const TaskManagement = () => {
  return (
    <div>
      <Header />
      <div className="MainArea flex flex-row gap-4">
        <TaskBoard bgColor={"#ADD8E6"} boardHeading="Tasks to Do" />
        <TaskBoard bgColor={"#F4EA56"} boardHeading="Tasks In Progess" />
        <TaskBoard bgColor={"#44D7A8"} boardHeading="Tasks to Do" />
      </div>
    </div>
  );
};

export default TaskManagement;
