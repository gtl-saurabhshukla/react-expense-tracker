import React from 'react';
import { shallow } from 'enzyme';

import { TransactionList } from './TransactionList';

describe('./src/Components/TransactionList.tsx', (): any => {
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

  const Props: any = {
    context: {
      transactions,
    },
  };
  const getComponent = (): any => {
    return shallow(<TransactionList {...Props} />);
  };

  let component: any;
  let instance: any;
  beforeEach((): any => {
    component = getComponent();
    instance = component.instance();
  });

  it('Should TransactionList renders without crashing', (): any => {
    expect(component.exists()).toBe(true);
  });

  it('Should TransactionList have title "History"', (): any => {
    const title = component.find('h3').text();
    expect(title).toContain('History');
  });
});
