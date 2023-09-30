import Tasks from "./Tasks";
import { useState } from "react";

function FilterSort({ tasks, onDelete }) {
    // Calculate the current date
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleTaskCompletion = (taskId, isCompleted) => {
    if (isCompleted) {
      const completedTask = tasks.find((task) => task.id === taskId);
      setCompletedTasks([...completedTasks, completedTask]);

    } else {
      const updatedCompletedTasks = completedTasks.filter((task) => task.id !== taskId);
      setCompletedTasks(updatedCompletedTasks);
    }
  };
    const currentDate = new Date();
  
    // Filter tasks for the next 3 days and tasks with more than 3 days to the deadline
    const upcomingTasks = tasks.filter((task) => {
      const taskDate = new Date(task.day);
      const timeDifference = taskDate.getTime() - currentDate.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
      return daysDifference >= 0 && daysDifference <= 3;
    });
  
    const longTermTasks = tasks.filter((task) => {
      const taskDate = new Date(task.day);
      const timeDifference = taskDate.getTime() - currentDate.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
      return daysDifference > 3;
    });
  
    // Sort tasks by the "day" attribute
    upcomingTasks.sort((a, b) => new Date(a.day) - new Date(b.day));
    longTermTasks.sort((a, b) => new Date(a.day) - new Date(b.day));
  
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
    </div>
    );
  }

  export default FilterSort;