import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every 1 second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  const formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);

  return (
    <div
      className="date-time-display">
      <h3>Current Date and Time</h3>
      <p>{formattedDateTime}</p>
    </div>
  );
}

export default DateTimeDisplay;