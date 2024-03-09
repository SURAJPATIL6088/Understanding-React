import React, { useState } from "react";
import "./style.css";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    // if the task is not entered
    if(title.trim() != "" && amount.trim() != "" && date.trim() != "" )
    {
      onAddExpense(newExpense);
    }
    else{
      alert("Add The Task First");
    }
    
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-input-container">
      <div className="form-input-first-container">
        <div>
          <label className="label-date" >Title:</label>
          <input  className="input-date" type="text" placeholder="title here" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label className="label-date" >Amount:</label>
          <input  className="input-date" type="number" placeholder="amount here" value={amount} onChange={handleAmountChange} />
        </div>
      </div>
      <div className="form-input-second-container">
        <div>
          <label className="label-date">Date:</label>
          <input className="input-date" type="date" value={date} onChange={handleDateChange} />
          </div>
          <button className="form-btn" type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
