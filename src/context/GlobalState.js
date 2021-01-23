import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

//create initial state
const initialState = {
    transactions: [
        // { id: 1, description: 'Projrct 1 income', amount: 100 },
        // { id: 2, description: 'Projrct 2 income', amount: -400 },
        // { id: 3, description: 'Projrct 3 income', amount: 500 },
        // { id: 4, description: 'Projrct 4 income', amount: -500 }
    ]
}

//create GlobalContext
export const GlobalContext = createContext(initialState);

//create a provider for the GlobalContext
export const GlobalProvider = ({ children }) => {
    const [expenseAppState, expenseAppStatedispatch] = useReducer(AppReducer, initialState);

    const addTransaction = (transactionData) => {
        expenseAppStatedispatch({
            type: "ADD_TRANSACTION",
            payload: transactionData
        });
    }

    //delTransaction function
    const delTransaction = (id) => {
        // console.log(id);
        expenseAppStatedispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    // console.log(expenseAppState);
    return (
        <GlobalContext.Provider value={{
            transactions: expenseAppState.transactions,
            addTransaction,
            delTransaction
        }
        }>
            {children}
        </GlobalContext.Provider>
    );

}