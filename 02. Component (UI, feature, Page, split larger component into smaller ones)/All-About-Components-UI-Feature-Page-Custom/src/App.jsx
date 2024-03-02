import "./App.css";

// JSX for title
const Title = () => {
  return (
    <div>
      <p>Components</p>
    </div>
  );
};

function App() {
  return (
    <>
      <div className="title">
        <Title />
      </div>

      <div className="app-container">
        <div>
          <p>
            Create a Header Component from scratch using Functional Components
            with JSX
          </p>
        </div>
        <ul className="task-container">
          <li>Add a Logo on left</li>
          <li>Add a search bar in middle</li>
          <li>Add User icon on right</li>
          <li>Add CSS to make it look nice</li>
        </ul>
      </div>
    </>
  );
}

export default App;
