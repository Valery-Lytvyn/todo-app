import React from "react";
import { useRouter } from "next/navigation";
import CompletedButton from "../ui/CompletedButton";
import { TaskType } from "../../types";
import { StateContext, StateContextType } from "../../providers/StateProvider";
import { LuClipboardEdit as EditIcon } from "react-icons/lu";
import { FaTrash as ThrashIcon } from "react-icons/fa6";

function TaskTile({ task }: { task: TaskType }) {
  const { id, title, description, taskEndDate, isCompleted, isImportant } =
    task;

  const route = useRouter();

  const toggleTaskCompletion = () => {
    updateTask(id, { ...task, isCompleted: !isCompleted });
  };

  const { deleteTask, updateTask } = React.useContext(
    StateContext,
  ) as StateContextType;

  return (
    <section
      className={`background group h-64 w-full  rounded-2xl border bg-light-borderColor p-4 shadow-xl shadow-zinc-200 dark:bg-dark-borderColor dark:shadow-zinc-900 
    ${isImportant ? "border-red-600" : "border-darkGray dark:border-lightGray "}`}
    >
      <div className="flex h-full flex-col justify-between gap-2 ">
        <div>
          <h3
            className={` text-xl font-bold tracking-wide first-letter:uppercase
          ${isImportant ? "text-red-600" : null}
          `}
          >
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 truncate text-wrap group-hover:overflow-y-auto sm:line-clamp-4">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <p>{taskEndDate}</p>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            {isCompleted ? (
              <CompletedButton
                title="Completed"
                variant="bg-green-500 hover:bg-green-600"
                handleClick={toggleTaskCompletion}
              />
            ) : (
              <CompletedButton
                title="Incomplete"
                variant="bg-red-500 hover:bg-red-600"
                handleClick={toggleTaskCompletion}
              />
            )}
            <div className="flex items-center gap-4">
              <EditIcon
                className="cursor-pointer text-2xl transition-all hover:text-green-600"
                onClick={() => route.push(`/updating-task/${id}`)}
              />
              <ThrashIcon
                className="cursor-pointer text-xl transition-all hover:text-red-500"
                onClick={() => deleteTask(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskTile;
