"use client";
import React from "react";
import TaskList from "@/app/components/task/TaskList";
import { StateContext, StateContextType } from "@/app/providers/StateProvider";
import useTasksMemo from "@/app/hooks/useTasksMemo";

function ImportantTasks() {
  const { importantTasks } = React.useContext(StateContext) as StateContextType;
  const tasksMemo = useTasksMemo(importantTasks);
  return <TaskList title="Important Tasks" tasks={tasksMemo} />;
}

export default ImportantTasks;
