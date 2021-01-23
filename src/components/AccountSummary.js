import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/app.css';

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);
    const transactionsAmounts = transactions.map(transaction => transaction.amount);
    // console.log(transactionsAmounts);
    const income = transactionsAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0);
    // console.log(income);

    const expense = transactionsAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0);
    // console.log(expense);
    return (
        <div className="account-summary-container">
            <div className="income-value-div">
                <p>INCOME</p>
                <span>{income}</span>
            </div>
            <div className="expense-value-div">
                <p>EXPENSE</p>
                <span>{expense}</span>
            </div>
        </div>
    )
}