export interface TaskType {
  id: string;
  title: string;
  description?: string;
  taskEndDate: string;
  isCompleted: boolean;
  isImportant: boolean;
}
