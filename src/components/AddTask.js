import React, { useState } from 'react';

const AddTask = ({ onAdd, selectedDate }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
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
        <label>Task: </label>
        <input
          type="text"
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date: </label>
        <span className="day-time-display">{selectedDate.toDateString()}</span>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;