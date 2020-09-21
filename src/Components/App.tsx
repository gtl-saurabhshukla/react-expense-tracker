import React from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './Income';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import Toast from './Toast';

import { GlobalProvider } from '../context/GlobalState';

import '../assets/style/style.css';

function App(): any {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      <Toast />
    </GlobalProvider>
  );
}

export default App;
