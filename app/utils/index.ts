import { TaskType } from "../types";

export const sortByDate = (data: TaskType[]) => {
  return data.sort((a, b) => {
    const dateA = Date.parse(b.taskEndDate);
    const dateB = Date.parse(a.taskEndDate);
    return dateA - dateB;
  });
};

export const today = (): string => new Date().toISOString().substr(0, 10);
