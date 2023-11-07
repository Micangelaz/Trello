export interface Task {
  id: number;
  title: string;
  status: string;
}

export const tasks: Task[] = [
  { id: 1, title: 'Задача 1', status: 'Done' },
  { id: 2, title: 'Задача 2', status: 'Testing' },
  { id: 3, title: 'Задача 3', status: 'ToDo' },
];
