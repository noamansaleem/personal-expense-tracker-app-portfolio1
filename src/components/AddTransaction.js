import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);
    // console.log(addTransaction);

    const handleTransaction = (e) => {
        e.preventDefault();
        const transactionData = {
            id: new Date().getTime(),
            description,
            amount: parseInt(transactionAmount)
        }
        // console.log(transactionData)
        addTransaction(transactionData);
        setDescription('');
        setTransactionAmount('');
    }


    return (
        <div className="add-new-transaction-container">
            <p>
                Add New Transaction
                <br />
                <span>(enter expenses with negative "-" sign)</span>
            </p>
            <hr />
            <form onSubmit={handleTransaction}>
                <label htmlFor="description">
                    Description
                </label>
                <br />
                <input type="text"
                    placeholder="Detail of transaction"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required="required"
                />
                <br />
                <label htmlFor="amount">
                    Amount of Transaction
                </label>
                <br />
                <input type="number"
                    placeholder="Enter amount of income/expense"
                    id="amount"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    required="required"
                />
                <br />
                <div className="d-grid gap-2">
                    <button className="btn btn-success">Add Transaction</button>
                </div>
            </form>
        </div >
    )
}