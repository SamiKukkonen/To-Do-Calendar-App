import React, { useState } from 'react';

const AddTask = ({ onAdd, selectedDate }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

     // Check if the text exceeds the maximum allowed length
    if (text.length > 25) { // Set your desired character limit here (100 characters in this example)
      alert('Task is too long. Please limit your input to 25 characters.');
      return;
    }

    const id = Math.floor(Math.random() * 10000);

    // Pass selectedDate separately, not as part of an object
    onAdd({ id, text, day: selectedDate.toDateString() });

    setText('');
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label><b>Task: </b></label>
        <input
          type="text"
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label><b> Date:</b> </label>
        <span className="day-time-display">{selectedDate.toDateString()}</span>
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;