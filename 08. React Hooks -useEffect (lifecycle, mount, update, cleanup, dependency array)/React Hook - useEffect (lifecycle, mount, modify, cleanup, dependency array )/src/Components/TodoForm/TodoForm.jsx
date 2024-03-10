import React, { useState } from "react";
import './style.css'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmitChange = (e) => {
    e.preventDefault();
    if(value.trim() === '')
    {
        return;
    }

    addTodo(value.trim());
    setValue('');
  };

  return (
    <form className="form-input-container" onSubmit={handleSubmitChange}>
      <input
        value={value}
        placeholder="add todo task here..."
        type="text"
        className="form-submit-input"
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="form-submit-btn" type="submit" >Add</button>
    </form>
  );
};

export default TodoForm;
