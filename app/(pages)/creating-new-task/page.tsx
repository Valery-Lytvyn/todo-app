"use client";
import React from "react";
import TaskForm from "@/app/components/task/TaskForm";
import CloseButton from "@/app/components/ui/CloseButton";
import SectionTitle from "@/app/components/ui/typography/SectionTitle";
import useCreatingTask from "@/app/hooks/useCreatingTask";
import { StateContext, StateContextType } from "@/app/providers/StateProvider";

function CreatingTask() {
  const { createTask } = React.useContext(StateContext) as StateContextType;
  const {
    taskData,
    handleInputChange,
    handleTextAreaChange,
    handleImportanceTask,
    handleCompletedTask,
    handleDateChoice,
    goBack,
  } = useCreatingTask();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(taskData);
    goBack();
  };
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="relative rounded-xl border border-light-borderColor  dark:border-dark-borderColor sm:w-3/4 lg:w-1/2">
        <div className="absolute right-1 top-1 md:right-4 md:top-4">
          <CloseButton clickHandler={goBack} />
        </div>
        <div className="flex  flex-col gap-4 p-4 md:p-8 lg:p-12">
          <SectionTitle title="Create Task" />
          <TaskForm
            taskData={taskData}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            handleTextAreaChange={handleTextAreaChange}
            handleImportanceTask={handleImportanceTask}
            handleCompletedTask={handleCompletedTask}
            handleDateChoice={handleDateChoice}
            submitButtonTitle="Create"
          />
        </div>
      </div>
    </div>
  );
}

export default CreatingTask;
