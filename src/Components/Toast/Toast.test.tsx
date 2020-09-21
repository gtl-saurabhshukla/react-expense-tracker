import React from 'react';
import { shallow } from 'enzyme';
import { ToastContainer } from 'react-toastify';
import { Toast } from './Toast';
import { GlobalProvider } from '../../context/GlobalState';

describe('./src/Components/Toast.tsx', (): any => {
  const getComponent = (): any => {
    return shallow(<Toast />);
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
});
