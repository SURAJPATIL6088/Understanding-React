import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState("");

  // it used to store the tasks
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () =>{
    if(inputValue.trim() !== '')
    {
      const newTodo = {
        text: inputValue,
        timestamp: new Date().toLocaleString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const setToggleBtn = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1 className="main-title">To Do List Application</h1>
      <div className="input-container">
        <fieldset className="input-container-add-task">
          <legend>Good Morning</legend>
          <input
            type="text"
            placeholder="add your task..."
            value={inputValue}
            onChange={handleInputChange}
            className="input-container-add-task-input"
          />
          <button onClick={handleAddTodo} className="input-container-add-task-btn">Add Task</button>
        </fieldset>
      </div>

      <ul className="main-task-list-container">
        {todos.map((todo, index) => (
          <li className="task-list-container" key={index}>
            {todo.text}
            <p className="task-time-container">{todo.timestamp}</p>
            <button className="task-btn-container" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
          
        ))}
      </ul>

      <button onClick={setToggleBtn}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default App;
