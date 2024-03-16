import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");

  const handleAddExpense = () => {
    if (!itemName || !itemCost) {
      return;
    }

    const newExpense = { name: itemName, cost: parseFloat(itemCost) };
    setExpenses([...expenses, newExpense]);
    setItemName("");
    setItemCost("");
  };

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (savedExpenses) {
      setExpenses(savedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const totalExpenses = useMemo(() => {
    return expenses.reduce((acc, expense) => acc + expense.cost, 0);
  }, [expenses]);

  return (
    <div className="container-expenses-tracker">
      <h1>React Hook - useMemo</h1>
      <div className="container-input-expenses-tracker">
        <input
          type="text"
          placeholder="item name..."
          className="container-input-expenses-tracker"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="item cost..."
          className="container-input-expenses-tracker"
          value={itemCost}
          onChange={(e) => setItemCost(e.target.value)}
        />
      </div>
      <button className="btn-expense-tracker" onClick={handleAddExpense}>Add Expense</button>

      <div>
        <ul className="container-ul-expenses-tracker">
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <li className="list-expense-container" key={index}>
                {expense.name} : {expense.cost}
              </li>
            ))
          ) : (
            <li className="list-expense-container" >No expenses</li>
          )}
        </ul>

        <h3>Total Expense : {totalExpenses}</h3>
      </div>
    </div>
  );
}

export default App;
