import React from "react";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

function CreateNewTaskButton() {
  return (
    <button className="hover group flex h-64 w-full  rounded-2xl border-2  border-dotted border-light-borderColor  p-4 hover:border-solid hover:bg-stone-600/15 dark:border-dark-borderColor">
      <Link
        href="/creating-new-task"
        className="flex h-full w-full items-center justify-center gap-2 text-2xl font-bold text-slate-300/80 group-hover:text-white"
      >
        <AiOutlinePlus />
        <p>Add new task!</p>
      </Link>
    </button>
  );
}

export default CreateNewTaskButton;
