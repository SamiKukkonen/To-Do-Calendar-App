
import React, { useState } from 'react';
import Header from './components/Header';
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
    <div>
    <div className="container">
      <Header/>
      <DateTimeDisplay/>

      {/* Render the CalenderApp component and pass the handleDateChange function */}
      <CalenderApp onDateChange={handleDateChange} />

      <AddTask onAdd={addTask} selectedDate={selectedDate} />
      </div>
      <div>
      <FilterSort tasks={tasks} selectedDate={selectedDate} onDelete={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
