import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styling/Calender.css';

function CalenderApp({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Call the callback function with the new date
    onDateChange(date);
  };

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={handleDateChange} value={selectedDate} minDate={new Date()} minDetail='year' />
      </div>
      <h2 className='text-center'>
        <span>Selected Date:</span>{' '}
        {selectedDate.toDateString()}
      </h2>
    </div>
  );
}

export default CalenderApp;