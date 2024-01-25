import { useMemo } from "react";
import { TaskType } from "../types";

function useTasksMemo(tasks: TaskType[]): TaskType[] {
  const tasksMemo = useMemo(() => tasks, [tasks]);
  return tasksMemo;
}

export default useTasksMemo;
