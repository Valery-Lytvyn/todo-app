import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { today } from "../utils";
import { TaskType } from "./../types/index";

const defaultTaskData = {
  id: "",
  title: "",
  description: "",
  isImportant: false,
  isCompleted: false,
  taskEndDate: today(),
};

function useCreatingTask() {
  const defaultTaskDataRef = useRef(defaultTaskData);
  const [taskData, setTaskData] = useState<TaskType>(
    defaultTaskDataRef.current,
  );

  useEffect(() => {
    setTaskData(defaultTaskDataRef.current);
  }, [defaultTaskDataRef]);

  const route = useRouter();
  const goBack = () => {
    return route.back();
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedTitle = e.target.value;
      setTaskData((prev) => ({ ...prev, title: updatedTitle }));
    },
    [],
  );

  const handleTextAreaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const updatedTask = e.target.value;
      setTaskData((prev) => ({ ...prev, description: updatedTask }));
    },
    [],
  );

  const handleImportanceTask = () => {
    setTaskData((prev) => ({ ...prev, isImportant: !taskData.isImportant }));
  };
  const handleCompletedTask = () => {
    setTaskData((prev) => ({ ...prev, isCompleted: !taskData.isCompleted }));
  };

  const handleDateChoice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedEndDate = e.target.value;
      setTaskData((prev) => ({ ...prev, taskEndDate: updatedEndDate }));
    },
    [],
  );

  return {
    taskData,
    setTaskData,
    handleInputChange,
    handleTextAreaChange,
    handleImportanceTask,
    handleCompletedTask,
    handleDateChoice,
    goBack,
  };
}

export default useCreatingTask;
