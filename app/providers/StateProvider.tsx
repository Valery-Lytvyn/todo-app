"use client";
import React, { createContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import axios from "axios";
import { TaskType } from "../types";
import { sortByDate } from "../utils";

interface GlobalStyleProviderProps {
  children: React.ReactNode;
}

export interface StateContextType {
  tasks: TaskType[];
  completedTasks: TaskType[];
  importantTasks: TaskType[];
  incompleteTasks: TaskType[];
  deleteTask: (id: string) => void;
  updateTask: (id: string, arg: TaskType) => void;
  createTask: (arg: TaskType) => void;
  getSingleTask: (id: string) => TaskType | undefined;
}

export const StateContext = createContext<StateContextType | null>(null);

function StateProvider({ children }: GlobalStyleProviderProps) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const { user } = useUser();

  useEffect(() => {
    console.log(user);

    if (user) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    try {
      const res = await axios.get("/api/tasks", {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      const sortedData = sortByDate(res.data);
      setTasks(sortedData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to fetch tasks");
    }
  };
  const createTask = async (taskData: TaskType) => {
    try {
      const res = await axios.post("/api/tasks", taskData);

      if (res.data.error) {
        toast.error("error axios", res.data.error);
      }
      toast.success("Task created successfully");
      getData();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success(`Task deleted`);
      getData();
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };
  const getSingleTask = (id: string) => tasks.find((task) => task.id === id);
  const importantTasks = tasks.filter((task) => task.isImportant);
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);

  const updateTask = async (id: string, task: TaskType) => {
    try {
      await axios.put(`/api/tasks/${id}`, task);
      toast.success("Task updated successfully!!!");
      getData();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <StateContext.Provider
      value={{
        tasks,
        deleteTask,
        completedTasks,
        importantTasks,
        incompleteTasks,
        updateTask,
        getSingleTask,
        createTask,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
