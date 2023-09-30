import React, { useState } from 'react';

const CompletedTasks = ({ completedTasks, onRefresh }) => {
  const handleRefresh = () => {
    // Call the onRefresh function passed as a prop to clear completed tasks
    onRefresh();
  };

  return (
    <div>
      <h2>Completed Tasks</h2>
      <button onClick={handleRefresh}>Clear</button>
      {completedTasks.map((task) => (
        <div key={task.id}>
          <p>
            Name: <b>{task.text}</b> Date: <b>{task.day}</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;