import React from 'react';
import { mount } from 'enzyme';

import { Transaction } from './Transaction';

describe('./src/Components/Transaction.tsx', (): any => {
  const getComponent = (): any => {
    return mount(<Transaction />);
  };

  let component: any;
  let instance: any;
  beforeEach((): any => {
    component = getComponent();
    instance = component.instance();
  });

  it('Should App renders without crashing', (): any => {
    expect(component.exists()).toBe(true);
  });

  it('should render component correctly', (): any => {
    expect(component).toMatchSnapshot();
  });
});
