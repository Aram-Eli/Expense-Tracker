
import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

// Initial state
const initialState = {
   transactions: []
};

// CreateContext
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   // Actions caused to my reducer
   function deleteTransaction (id) {
      dispatch({
         type: "DELETE_TRANSACTION",
         payload: id
      });
   };

   function addTransaction (transaction) {
      dispatch({
         type: "ADD_TRANSACTION",
         payload: transaction
      });
   };

   return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
     {children}
   </GlobalContext.Provider>)
};