import React from 'react';
import { shallow } from 'enzyme';

import { IncomeExpenses } from './IncomeExpenses';

describe('./src/Components/IncomeExpenses.tsx', (): any => {
  const transactions = [
    {
      id: Math.floor(Math.random() * 100000000),
      text: 'Salary',
      amount: +8000,
    },
    {
      id: Math.floor(Math.random() * 100000000),
      text: 'Food',
      amount: -5000,
    },
  ];
  const amounts = transactions.map(
    (transaction: any): any => transaction.amount,
  );
  const getComponent = (): any => {
    return shallow(<IncomeExpenses />);
  };

  let component: any;
  let instance: any;
  beforeEach((): any => {
    component = getComponent();
    instance = component.instance();
  });

  it('Should IncomeExpenses renders without crashing', (): any => {
    expect(component.exists()).toBe(true);
  });

  it('Should Income title text written correctly', (): any => {
    const incomeTitle = component.find('h4.income-title').text();
    expect(incomeTitle).toContain('Income');
  });

  it('Should Expense title text written correctly', (): any => {
    const expenseTitle = component.find('h4.expense-title').text();
    expect(expenseTitle).toContain('Expense');
  });

  it('Should Income amount is correct', (): any => {
    const income = amounts
      .filter((item: number): any => item > 0)
      .reduce((acc: number, item: number): any => (acc += item), 0)
      .toFixed(2);
    expect(income).toEqual('8000.00');
  });

  it('Should Expense amount is correct', (): any => {
    const expense = (
      amounts
        .filter((item: number): any => item < 0)
        .reduce((acc: number, item: number): any => (acc += item), 0) * -1
    ).toFixed(2);
    expect(expense).toEqual('5000.00');
  });
});
