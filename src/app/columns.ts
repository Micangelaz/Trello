import { Task } from './tasks';
import { tasks } from './tasks';

export const columns: { [key: string]: Task[] } = {
  ToDo: tasks.filter((task) => task.status === 'ToDo'),
  'In Progress': tasks.filter((task) => task.status === 'In Progres'),
  Testing: tasks.filter((task) => task.status === 'Testing'),
  Done: tasks.filter((task) => task.status === 'Done'),
};
