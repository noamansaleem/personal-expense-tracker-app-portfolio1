export const AppReducer = (state, action) => {
    // console.log(state.transactions)
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                // ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case "DELETE_TRANSACTION":
            return {
                transactions: state.transactions
                    .filter(transaction => transaction.id !== action.payload)
            }

        default:
            return state;
    }
}