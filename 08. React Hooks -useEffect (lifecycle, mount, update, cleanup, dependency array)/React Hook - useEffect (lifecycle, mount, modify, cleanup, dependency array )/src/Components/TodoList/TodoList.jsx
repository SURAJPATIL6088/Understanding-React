import React from "react";
import "./style.css"

const TodoList = ({ todos, toggleTodo, deleteTodo}) => {
    const handleToggle = (id) => {
        toggleTodo(id);
    };

    return (
    <ul className="todo-container">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? "completed" : "not-completed"}
          
          onClick={() => handleToggle(todo.id)}
        >
          {todo.text}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}

            className="todo-list-btn"
          >
            Delete
          </button>

        </li>
      ))}
    </ul>
  );
};

export default TodoList;
