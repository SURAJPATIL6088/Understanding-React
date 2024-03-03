import React from "react";
import UserDashboard from "./Components/User-dashboard/UserDashboard";
import ToDoList from "./Components/ToDoList/ToDoList";
import "./TodoApp.css";

function TodoApp() {
  // this is our main/parent component from these we pass the props
  
  // this is for the usercard component
  const person = {
    userName: "john4546",
    name: "John Bhai",
    address:"Sector:NTD Road,Fra NYC-4587019",
    age: 22,
    gender: "Male",
    Profession:"Software Engineer"
  };

  // this is for the todolist component
  const tasks = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Project Testing' },
    { id: 4, text: 'Deploy project' },
    { id: 5, text: 'Project Submission' },
  ];

  return (
    <div className="main-container">
      <h1 className="main-heading">ToDo Application</h1>
      <div className="sub-container">
        <div className="todo-list-container">
          <ToDoList tasks={tasks} />
        </div>
        <div className="user-dashboard-container">
          <UserDashboard person={person} />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
