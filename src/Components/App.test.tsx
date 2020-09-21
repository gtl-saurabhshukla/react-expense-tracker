import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import Header from './Header';

describe('./src/Components/App.tsx', (): any => {
  const getComponent = (): any => {
    return mount(<App />);
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

  it('Should App have Header component', (): any => {
    const homeComponent = component.find(Header);
    expect(homeComponent).toHaveLength(1);
  });
});
