import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const IncomeExpenses = (): any => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(
    (transaction: any): any => transaction.amount,
  );

  const income = amounts
    .filter((item: number): any => item > 0)
    .reduce((acc: number, item: number): any => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((item: number): any => item < 0)
      .reduce((acc: number, item: number): any => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4 className="income-title">Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4 className="expense-title">Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};
