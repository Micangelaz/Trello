import React from 'react';

import { Task } from '../tasks';

interface TaskProps {
  task: Task;
}

const TaskBase: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="task" key={task.id}>
      <div className="task-name">{task.title}</div>
      <div className="comments">
        <img src="message_icon.svg" alt="message" />
        <div className="count">1</div>
      </div>
    </div>
  );
};

export default TaskBase;
