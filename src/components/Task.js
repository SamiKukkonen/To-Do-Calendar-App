import React, { useState } from 'react';

const Task = ({ task, onDelete, onTaskCompletion }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
    onTaskCompletion(task.id, !isCompleted); // Notify parent component about task completion status
    
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
        {' '}{task.text}{' '}
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <br></br>
        {'('}{task.day}{')'}
      </h3>
    </div>
  );
};

export default Task;