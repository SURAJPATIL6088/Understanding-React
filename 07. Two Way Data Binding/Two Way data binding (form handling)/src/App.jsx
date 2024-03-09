import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import "./App.css";

function App() {
  // store all the todo task here
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Math.random().toString() }]);
  };

  return (
    <div>
      <h1 className='app-container'>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
