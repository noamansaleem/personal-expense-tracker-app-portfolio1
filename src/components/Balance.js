import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    // console.log(transactions)
    const transactionsAmounts = transactions.map(transaction => transaction.amount);
    // console.log(transactionsAmounts)
    const totalBalance = transactionsAmounts.reduce((acc, transaction) => (acc += transaction), 0);
    return (
        <div className="balance-container">
            <p>YOUR BALANCE</p>
            <span>Rs {totalBalance}</span>
        </div>
    )
}

export default Balance;