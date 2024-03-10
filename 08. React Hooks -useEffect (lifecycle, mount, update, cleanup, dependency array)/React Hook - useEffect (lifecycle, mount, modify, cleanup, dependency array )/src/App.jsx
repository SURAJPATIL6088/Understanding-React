import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }

  }, []); // only run once on the mount

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // run on the todo add (re-rendering also possible)

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredItem = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchItem.toLowerCase())
  );

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (

    <div className="app-container">
      <h1>Todo List</h1>
      <hr/>
      <input
        type="text"
        placeholder="search here..."
        className="app-search-container"
        value={searchItem}
        onChange={handleSearchChange}
      />
    
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredItem}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

    </div>

  );
}

export default App;
