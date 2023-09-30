import React, { useState } from 'react';
import Tasks from './Tasks';
import CompletedTasks from './CompletedTasks';

function FilterSort({ tasks, onDelete, setTasks }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleRefreshCompletedTasks = () => {
    // Clear the list of completed tasks
    setCompletedTasks([]);
    };

  const handleTaskCompletion = (taskId, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: isCompleted } : task
    );

    const completedTask = updatedTasks.find((task) => task.id === taskId);
    setCompletedTasks((prevCompletedTasks) =>
      isCompleted ? [...prevCompletedTasks, completedTask] : prevCompletedTasks.filter((task) => task.id !== taskId)
    );

    // Update the tasks state
    setTasks(updatedTasks);
  };

  const upcomingTasks = tasks.filter((task) => !task.isCompleted && isWithinNextNDays(task.day, 3));
  const longTermTasks = tasks.filter((task) => !task.isCompleted && !isWithinNextNDays(task.day, 3));

  function isWithinNextNDays(taskDate, days) {
    const currentDate = new Date();
    const deadlineDate = new Date(taskDate);
    const timeDifference = deadlineDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference >= 0 && daysDifference <= days;
  }

    return (
    <div>
      <div className='upcoming-tasks-header'>
        <h2>Upcoming Tasks (Next 3 Days)</h2>
        </div>
        <div className='upcoming-tasks'>
        {upcomingTasks.length > 0 ? (
          <Tasks tasks={upcomingTasks} onDelete={onDelete} onTaskCompletion={handleTaskCompletion}/>
        ) : (
          'No upcoming tasks'
        )}
        </div>
        <div className="tasks-long-header">
        <h2>Long-Term Tasks (More than 3 Days)</h2>
        </div>
        <div className="long-term-tasks">
        {longTermTasks.length > 0 ? (
          <Tasks tasks={longTermTasks} onDelete={onDelete} onTaskCompletion={handleTaskCompletion}/>
        ) : (
          'No long-term tasks'
        )}
      </div>
      <div className='completed-tasks'>
      <CompletedTasks completedTasks={completedTasks} onRefresh={handleRefreshCompletedTasks} /> {/* Pass completedTasks to CompletedTasks component */}
    </div>
    </div>
    );
  }

  export default FilterSort;