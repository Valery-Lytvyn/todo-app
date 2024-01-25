"use client";
import React from "react";
import { StateContext, StateContextType } from "./providers/StateProvider";
import TaskList from "./components/task/TaskList";
import useTasksMemo from "./hooks/useTasksMemo";

function AllTasks() {
  const { tasks } = React.useContext(StateContext) as StateContextType;
  const tasksMemo = useTasksMemo(tasks);

  return <TaskList title="All Tasks" tasks={tasksMemo} />;
}

export default AllTasks;
