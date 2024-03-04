import "./App.css";

function App() {
  const handleBtnClick = (color, e) => {
    console.log("Button is Pressed");

    if (color === "Red") {
      console.log("Red Color 🔴", e);
      alert("Did you Click on Red 🔴")
    } else if (color === "Green") {
      console.log("Green Color 🟢", e);
      alert("Did you Click on Green 🟢")
    } else if (color === "Blue") {
      console.log("Blue Color 🔵", e.target);
      alert("Did you Click on Blue 🔵")
    } else if (color === "Orange") {
      console.log("Orange Color 🟠", e.clientX);
      alert("Did you Click on Orange 🟠")
    } else if (color === "White") {
      console.log("White Color ⚪", e.clientY);
      alert("Did you Click on White ⚪")
    } else if (color === "Black") {
      console.log("Black Color ⚫", e);
      alert("Did you Click on Black ⚫")
    }
  };

  return (
    <div className="App">
      <div>
        <p>Click me Then See You in Console...</p>

        <div className="btn-color-change">
          <button
            onClick={(e) => handleBtnClick("Red", e)}
            className="btn-color btn-color-red"
          >
            Red
          </button>
          <button
            onClick={(e) => handleBtnClick("Green", e)}
            className="btn-color btn-color-green"
          >
            Green
          </button>
          <button
            onClick={(e) => handleBtnClick("Blue", e)}
            className="btn-color btn-color-blue"
          >
            Blue
          </button>
          <button
            onClick={(e) => handleBtnClick("Orange", e)}
            className="btn-color btn-color-orange"
          >
            Oragne
          </button>
          <button
            onClick={(e) => handleBtnClick("Black", e)}
            className="btn-color btn-color-black"
          >
            Black
          </button>
          <button
            onClick={(e) => handleBtnClick("White", e)}
            className="btn-color btn-color-white"
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
