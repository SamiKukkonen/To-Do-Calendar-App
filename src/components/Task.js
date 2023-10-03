import React, { useState } from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheck2Square} from 'react-icons/bs';

const Task = ({ task, onDelete, onTaskCompletion }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
    onTaskCompletion(task.id, !isCompleted); // Notify parent component about task completion status
    
  };

  return (
    <div className={`task ${isCompleted ? 'completed' : ''}`}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>

      <BsCheck2Square
          title="Completed?"
          className=" check-icon"
          onClick={() => toggleCompletion (task.id)}
        />
      

      <AiOutlineDelete
          title="Delete?"
          className="icon"
          onClick={() => onDelete (task.id)}
        />
    </div>
  );
};

export default Task;