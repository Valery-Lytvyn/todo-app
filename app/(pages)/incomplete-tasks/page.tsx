"use client";
import TaskList from "@/app/components/task/TaskList";
import useTasksMemo from "@/app/hooks/useTasksMemo";
import { StateContext, StateContextType } from "@/app/providers/StateProvider";
import React from "react";

function IncompleteTasks() {
  const { incompleteTasks } = React.useContext(
    StateContext,
  ) as StateContextType;
  const tasksMemo = useTasksMemo(incompleteTasks);
  return <TaskList title="Incomplete Tasks" tasks={tasksMemo} />;
}

export default IncompleteTasks;
