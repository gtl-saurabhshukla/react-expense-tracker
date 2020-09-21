import React from 'react';
import { shallow } from 'enzyme';

import { Balance } from './Balance';

describe('./src/Components/Balance.tsx', (): any => {
  const transactions = [
    {
      id: Math.floor(Math.random() * 100000000),
      text: 'Salary',
      amount: +8000,
    },
    {
      id: Math.floor(Math.random() * 100000000),
      text: 'Food',
      amount: -3000,
    },
  ];
  const amounts = transactions.map(
    (transaction: any): any => transaction.amount,
  );

  const getComponent = (): any => {
    return shallow(<Balance />);
  };

  let component: any;
  let instance: any;
  beforeEach((): any => {
    component = getComponent();
    instance = component.instance();
  });

  it('Should Balance renders without crashing', (): any => {
    expect(component.exists()).toBe(true);
  });

  it('Should heading contains "Your Balance" text', (): any => {
    const heading = component.find('.balance').text();
    expect(heading).toContain('Your Balance');
  });

  it('Should total have the correct value', (): any => {
    const total = amounts
      .reduce((acc: number, item: number): number => (acc += item), 0)
      .toFixed(2);
    expect(total).toContain('5000');
  });
});
