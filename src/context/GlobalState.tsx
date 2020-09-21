import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import {
  deleteTransactionAction,
  addTransactionAction,
  setError,
  resetError,
} from './AppActions';

// Initial state
const initialState: any = {
  transactions: [],
  error: undefined,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }: any): any => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id: number): any {
    dispatch(deleteTransactionAction(id));
  }

  function addTransaction(transaction: any): any {
    dispatch(addTransactionAction(transaction));
  }

  function errorHandler(error: any): any {
    dispatch(setError(error));
  }

  function reSetErrorHandler(): any {
    dispatch(resetError());
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        deleteTransaction,
        addTransaction,
        errorHandler,
        reSetErrorHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
