import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';


export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    // console.log(transactions[0].amount);
    return (
        <div className="transaction-history-container">
            <p>History</p>
            <hr />
            <ul>
                {transactions.map((transaction, index) => <Transaction transaction={transaction} key={index} />
                )}
            </ul>
        </div>
    )
}