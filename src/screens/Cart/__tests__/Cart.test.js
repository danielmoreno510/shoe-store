import React from 'react';
import {shallow} from 'enzyme';

import Cart from '../Cart';

describe('Cart component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      cart: [],
      setCurrentShoe: jest.fn(),
      setClearCart: jest.fn(),
      navigation: {navigate: jest.fn()},
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<Cart {...testProps} />);

      it('THEN should display a regular Cart', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe('WHEN the showProduct and Clear Cart function is called', () => {
      const customProps = {...testProps, cart: [{}]};
      const shallowWrapper = shallow(<Cart {...customProps} />);
      shallowWrapper.find('ShoeInfo').props().showProduct();
      shallowWrapper.find('CustomButton').at(0).simulate('press');
      shallowWrapper.find('CustomButton').at(1).simulate('press');

      it('THEN setCurrentShoe and setClearCart function should be called', () => {
        expect(testProps.setCurrentShoe).toBeCalledTimes(1);
        expect(testProps.setClearCart).toBeCalledTimes(1);
      });
    });
  });
});
