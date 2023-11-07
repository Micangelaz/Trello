import React from 'react';
import TaskBase from './TaskBase';
import TaskAdd from './TaskAdd';
import { Task } from '../tasks';


interface ColumnProps {
  tasks: Task[];
  title: string;
}

const Column: React.FC<ColumnProps> = ({ tasks, title}) => {

  return (
      <div className="column" key={title}>
        <div className="column-header">{title}</div>
        {tasks.map((task) => (
          <TaskBase key={task.id} task={task} />
        ))}
        <TaskAdd />
      </div>
      
  );
};

export default Column;
