"use client";
import React from "react";
import TaskList from "@/app/components/task/TaskList";
import { StateContext, StateContextType } from "@/app/providers/StateProvider";
import useTasksMemo from "@/app/hooks/useTasksMemo";

function CompletedTasks() {
  const { completedTasks } = React.useContext(StateContext) as StateContextType;
  const tasksMemo = useTasksMemo(completedTasks);
  return <TaskList title="Completed Tasks" tasks={tasksMemo} />;
}

export default CompletedTasks;
