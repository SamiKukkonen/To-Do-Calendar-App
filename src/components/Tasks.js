import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onTaskCompletion }) => {

  return (
    <>
    <div
    className="task-checkbox">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onTaskCompletion={onTaskCompletion} />
      ))}
      </div>
    </>
  );
};

export default Tasks;