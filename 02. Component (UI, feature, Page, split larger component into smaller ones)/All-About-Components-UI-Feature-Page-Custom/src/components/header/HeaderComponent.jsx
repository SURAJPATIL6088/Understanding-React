import React from "react";
import "./style.css";
import Logo from "../../Logo/logo.png";
import Subscribe from "../subscribe/Subscribe";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="sub-header">
        <div className="logo-header">
          <img src={Logo} alt="user Logo here" className="logo" />
        </div>

        {/* <li>Add a search bar in middle</li>*/}
        <div className="search-header">
          <input type="text" className="inp-search" placeholder="search ..." />
          <button className="btn-search">Search</button>
        </div>

        <div className="icons-header">
          <ul className="icons-nav">
            <li>Profile</li>
            <li>
              <a href="/Subscribe">Subscribe</a>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
