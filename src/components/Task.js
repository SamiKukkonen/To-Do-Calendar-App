import React, { useState } from 'react';

const Task = ({ task, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={`task ${isCompleted ? 'completed' : ''}`}>
      <h3>
        <input
          type="checkbox"
          className="task-checkbox"
          checked={isCompleted}
          onChange={toggleCompletion}
        />
        {task.text}{' '}
        {task.day}{' '}
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </h3>
    </div>
  );
};

export default Task;
