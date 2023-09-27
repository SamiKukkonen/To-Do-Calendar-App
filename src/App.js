
import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import CalenderApp from './components/CalenderApp'; // Import the CalenderApp component
import './styling/styles.css'; // Import the CSS file
import DateTimeDisplay from './components/DateTimeDisplay';
import FilterSort from './components/FilterSort';

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
      <FilterSort tasks={tasks} selectedDate={selectedDate} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
