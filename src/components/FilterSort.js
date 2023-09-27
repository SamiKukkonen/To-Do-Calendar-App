import Tasks from "./Tasks";

function FilterSort({ tasks, onDelete }) {
    // Calculate the current date
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
      <div classname='upcoming_tasks'>
        <h2>Upcoming Tasks (Next 3 Days)</h2>
        {upcomingTasks.length > 0 ? (
          <Tasks tasks={upcomingTasks} onDelete={onDelete}/>
        ) : (
          'No upcoming tasks'
        )}
        </div>
      <div className="long_term_tasks">
        <h2>Long-Term Tasks (More than 3 Days)</h2>
        {longTermTasks.length > 0 ? (
          <Tasks tasks={longTermTasks} onDelete={onDelete}/>
        ) : (
          'No long-term tasks'
        )}
      </div>
    </div>
    );
  }

  export default FilterSort;