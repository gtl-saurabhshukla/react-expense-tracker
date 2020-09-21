import React from 'react';
import { shallow } from 'enzyme';

import { AddTransaction } from './AddTransaction';

describe('./src/Components/AddTransaction.tsx', (): any => {
  const getComponent = (): any => {
    return shallow(<AddTransaction />);
  };

  let component: any;
  let instance: any;
  beforeEach((): any => {
    component = getComponent();
    instance = component.instance();
  });

  it('Should AddTransaction renders without crashing', (): any => {
    expect(component.exists()).toBe(true);
  });

  it('should onDeposit update transactions correctly', (): any => {
    const text = 'Salary';
    const amount = 5000;
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    instance.addTransaction(newTransaction);
    const { transactions } = instance.props?.context;
    expect(transactions[0]).toEqual(newTransaction);
  });

  it('should onExpense update transactions correctly', (): any => {
    const text = 'Food';
    const amount = -2000;
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    instance.addTransaction(newTransaction);
    const { transactions } = instance.props?.context;
    expect(transactions[0]).toEqual(newTransaction);
  });
});
