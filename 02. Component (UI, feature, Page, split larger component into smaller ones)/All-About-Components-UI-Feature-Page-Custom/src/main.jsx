import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HeaderComponent from "./components/header/HeaderComponent.jsx";
import Profile from "./components/user-card/Profile.jsx";
import Subscribe from "./components/subscribe/Subscribe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderComponent />
    <App />
    <Profile />
    <Subscribe />
  </React.StrictMode>
);
