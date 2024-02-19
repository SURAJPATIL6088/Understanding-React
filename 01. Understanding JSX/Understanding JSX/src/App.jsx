import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const App = () => {
  const name = "JSX hu";

  const user = {
    firstName: "Reacher",
    lastName: "Bhai",
    job: "Special Investigator",
    avtarUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/19/Reacher_TV_poster.jpg",
  };

  /*
  // simple function
  function Information(user){
    return `Her name is ${user.firstName} ${user.lastName}. he is a ${user.job}.`;
  };
  */

  // arrow function
  const Information = (user) => {
    return `Her name is ${user.firstName} ${user.lastName}. he is a ${user.job}.`;
  };

  const root = ReactDOM.createRoot(document.getElementById("root"));

  function tiktik() {
    const element = (
      <div>
        <h1>Vite + React</h1>
        <h2>{Information(user)}</h2>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <button>Bhai me {name}</button>
      </div>
    );
    root.render(element);
  }
  // change in the 1 sec
  setInterval(tiktik, 1000);

  return (
    <div>
      <p>{tiktik}</p>
    </div>
  );
}

export default App;
