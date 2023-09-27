import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css';

function CalenderApp({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Call the callback function with the new date
    onDateChange(date);
  };

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={handleDateChange} value={selectedDate} minDate={new Date()} minDetail='year' />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {selectedDate.toDateString()}
      </p>
    </div>
  );
}

export default CalenderApp;