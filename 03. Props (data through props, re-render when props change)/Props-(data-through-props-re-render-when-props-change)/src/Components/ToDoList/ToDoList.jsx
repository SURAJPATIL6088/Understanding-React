import React from "react";
import "./style.css";

const ToDoList = (props) => {
  const { tasks } = props;

  return (
    <div className="container">
      <div className="todo-list-container">
        <p className="todo-list-heading">ToDo List</p>
        <ul>
          {tasks.map((item) => (
            <li key={item.id} className="task-list">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
