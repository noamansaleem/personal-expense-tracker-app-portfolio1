import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction, index }) => {
    //import GlobalContext
    const { delTransaction } = useContext(GlobalContext);


    const sign = transaction.amount > 0 ? '+' : '-';
    const transactionType = transaction.amount > 0 ? 'income' : 'expense';
    return (
        <li className={transactionType}>
            <button onClick={() => delTransaction(transaction.id)}>X</button>
            <span>{transaction.description}</span>
            <span>{sign}{Math.abs(transaction.amount)}</span>
        </li>
    );
}