import React, { Suspense } from "react";
import Loading from "@/app/loading";
import { TaskType } from "@/app/types";
import TaskTile from "./TaskTile";
import SectionTitle from "../ui/typography/SectionTitle";
import CreateNewTaskButton from "../CreateNewTaskButton";

interface TaskListProps {
  title: string;
  tasks: TaskType[];
}

function TaskList({ title, tasks }: TaskListProps) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col gap-4 py-4">
        <SectionTitle title={title} />
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4">
          {tasks.map((task) => (
            <TaskTile key={task.id} task={task} />
          ))}
          <CreateNewTaskButton />
        </div>
      </div>
    </Suspense>
  );
}

export default TaskList;
