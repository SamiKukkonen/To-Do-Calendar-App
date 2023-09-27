
import React, { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import CalenderApp from './CalenderApp'; // Import the CalenderApp component
import './styles.css'; // Import the CSS file
import DateTimeDisplay from './DateTimeDisplay';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Add a task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to handle date changes
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (

    <div className="container">
      <h1>To-Do App</h1>
      <DateTimeDisplay/>
      {/* Render the CalenderApp component and pass the handleDateChange function */}
      <CalenderApp onDateChange={handleDateChange} />

      <AddTask onAdd={addTask} selectedDate={selectedDate} />
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
