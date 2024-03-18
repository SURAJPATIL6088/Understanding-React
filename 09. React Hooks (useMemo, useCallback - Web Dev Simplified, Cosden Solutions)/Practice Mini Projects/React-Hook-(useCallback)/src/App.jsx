import React from "react";
import UserSeach from "./UserSeach";
import './App.css';

const allUsers = ["John", "Mark", "Doe", "Aman", "Varad", "Henry", "Iroon"];

const App = () => {
  return (
    <div className="main-container">
      <h1>Search Function</h1>
      <UserSeach allUsers={allUsers} />

      <div >
        <h3> User Lists </h3>
        {
          <ul>
            {allUsers.map((name, index) => (
              <li className="list-container" key={index}>{name}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default App;
