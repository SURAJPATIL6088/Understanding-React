import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
