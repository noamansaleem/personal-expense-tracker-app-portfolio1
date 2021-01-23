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
                {transactions.map((transaction, index) => {
                    {/* console.log(transaction) */ }
                    return (<Transaction transaction={transaction} key={index} />)
                    {/* return <li key={index}><span>{transaction.description}</span><span>{transaction.amount}</span></li> */ }

                })}
                {/* <li><span>School fee</span><span>-Rs 3000</span></li>
                <li><span>Pay</span><span>+Rs 1550</span></li> */}
            </ul>
        </div>
    )
}