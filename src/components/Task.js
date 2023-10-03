import React, { useState } from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import {ImCheckmark2} from 'react-icons/im';

const Task = ({ task, onDelete, onTaskCompletion }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
    onTaskCompletion(task.id, !isCompleted); // Notify parent component about task completion status
    
  };

  return (
    <div>
      <div>
      <h3>{task.text}</h3>
      
      <ImCheckmark2
          title="Completed?"
          className=" check-icon"
          onClick={() => toggleCompletion (task.id)}
        />
      <AiOutlineDelete
          title="Delete?"
          className="icon"
          onClick={() => onDelete (task.id)}
        />
        <p>{'( '}{task.day}{' )'}</p>
        </div>
    </div>
  );
};

export default Task;