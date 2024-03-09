import React from 'react';
import './style.css';

function ExpenseItem({ expense }) {
    return (
        <div className='expense-item-container'>
            <p>Title : {expense.title}</p>
            <p>Amount : {expense.amount}</p>
            <p>Date : {expense.date.toLocaleDateString()}</p>
        </div>
    );
}

export default ExpenseItem;
