import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const AddTransaction = (): any => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction, errorHandler, reSetErrorHandler } = useContext(
    GlobalContext,
  );

  const handleError = (): void => {
    if (text === '' || Number(amount) <= 0) {
      errorHandler('Please fill text and amount fields');
      return;
    }
    return;
  };

  const onDeposit = (e: any): void => {
    e.preventDefault();
    reSetErrorHandler();
    if (text !== '' && amount > 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
    }
    handleError();
    setText('');
    setAmount(0);
    return;
  };

  const onExpence = (e: any): void => {
    e.preventDefault();
    reSetErrorHandler();
    if (text !== '' && amount > 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: -amount,
      };
      addTransaction(newTransaction);
    }
    handleError();
    setText('');
    setAmount(0);
    return;
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e: any): any => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e: any): any => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn deposit" onClick={onDeposit}>
          Deposit
        </button>
        <button className="btn expense" onClick={onExpence}>
          Expense
        </button>
      </form>
    </>
  );
};
