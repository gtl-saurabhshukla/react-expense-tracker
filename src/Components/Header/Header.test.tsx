import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('./src/Components/Header.tsx', (): any => {
  const getComponent = (): any => {
    return shallow(<Header />);
  };

  let component: any;
  let instance: any;
  beforeEach((): any => {
    component = getComponent();
    instance = component.instance();
  });

  it('Should Header renders without crashing', (): any => {
    expect(component.exists()).toBe(true);
  });

  it('Should Header have h2 component', (): any => {
    const heading = component.find('h2');
    expect(heading).toHaveLength(1);
  });

  it('Should heading contains "Expense Tracker" text', (): any => {
    const heading = component.find('h2').text();
    expect(heading).toContain('Expense Tracker');
  });
});
