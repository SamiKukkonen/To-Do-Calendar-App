import FilterSort from "./FilterSort";
import React from 'react';

const CompletedTasks = ({ completedTasks }) => {
  return (
    <div>
      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <div key={task.id}>
          <p>Name: {task.text}</p>
          <p>Date: {task.day}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;