import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Balance = (): any => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(
    (transaction: any): number => transaction.amount,
  );

  const total = amounts
    .reduce((acc: number, item: number): number => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <h4 className="balance">Your Balance</h4>
      <h1 className="total">${total}</h1>
    </>
  );
};
