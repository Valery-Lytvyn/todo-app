import React from "react";
import DatePicker from "../DatePicker";
import { TaskType } from "@/app/types";

interface TaskFormProps {
  taskData: TaskType;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleImportanceTask: () => void;
  handleCompletedTask: () => void;
  handleDateChoice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitButtonTitle: string;
}

function TaskForm({
  taskData,
  handleSubmit,
  handleInputChange,
  handleTextAreaChange,
  handleImportanceTask,
  handleCompletedTask,
  handleDateChoice,
  submitButtonTitle,
}: TaskFormProps) {
  const { title, description, isImportant, isCompleted } = taskData;
  return (
    <form className="flex flex-col  gap-6 " onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleInputChange(e)}
          id="title"
          autoFocus
          className="text-md peer z-10 w-full rounded-lg border px-3 py-2 dark:bg-zinc-900"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="task">Task</label>
        <textarea
          value={description}
          onChange={(e) => handleTextAreaChange(e)}
          rows={5}
          id="task"
          className="text-md peer z-10 w-full rounded-lg border px-3 py-2 dark:bg-zinc-900"
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="important">An important task?</label>
        <input
          type="checkbox"
          name="important"
          id="important"
          checked={isImportant}
          onChange={handleImportanceTask}
          className="checked: accent-green-400"
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="completed">Is the task completed?</label>
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={isCompleted}
          onChange={handleCompletedTask}
          className="checked: accent-green-400"
        />
      </div>
      <DatePicker
        handleDateChoice={handleDateChoice}
        selectedDate={taskData.taskEndDate}
      />
      <button
        type="submit"
        className="rounded-lg bg-green-500 px-3 py-1 font-bold tracking-wide transition-all hover:bg-green-600 hover:text-gray-200"
      >
        {submitButtonTitle}
      </button>
    </form>
  );
}

export default TaskForm;
