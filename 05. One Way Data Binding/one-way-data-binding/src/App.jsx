import React from "react";
import { useState } from "react";
import "./App.css";
import data from "./TemplateData.json";


function App() {
  const [searchItem, setSearchItem] = useState("");

  return (
    <>
    <div className="main-container">
      <div className="main-search-container">
        <input type="text"  className="input-search-bar" placeholder="Search Here..." onChange={(e) => {
          setSearchItem(e.target.value);
        }}/>
      </div>

      <div className="card-container">
        {
          data
          .filter((val) => {
            if(searchItem == "")
            {
              return val;
            }
            else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
              return val;
            }
          })

          .map((val) => {
            return (
              <div className="card-container-indi" key={val.id}> 
                <img className="card-img" src={val.image} alt={val.title} />
                <h3 className="card-title">{val.title}</h3>
                <p className="card-price">${val.price}</p>
              </div>
            )
          })

        }
      </div>
    </div>    
    </>

  );
}

export default App;
