import React from 'react';
import {shallow} from 'enzyme';

import ShoeInfo from '../ShoeInfo';

describe('ShoeInfo component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      shoe: {
        id: 3,
        brand: 'Nike',
        reference: 'Blazer Low Platform',
        price: 200,
        sizes: [
          {label: '4.5', value: 4.5, quantity: 1},
          {label: '5', value: 5, quantity: 2},
          {label: '5.5', value: 5.5, quantity: 9},
          {label: '6', value: 6, quantity: 7},
          {label: '6.5', value: 6.5, quantity: 5},
          {label: '7', value: 7, quantity: 4},
        ],
        images: ['blazerLowPlatform1', 'blazerLowPlatform2', 'blazerLowPlatform3', 'blazerLowPlatform4'],
        date: '2021-06-01',
      },
      cart: [],
      addToCart: jest.fn(),
      showProduct: jest.fn(),
      twoSection: true,
      oneSection: false,
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<ShoeInfo {...testProps} />);

      it('THEN should display a regular ShoeInfo', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe('WHEN the addToCart showProduct button are pressed', () => {
      const customProps = {...testProps, oneSection: true, newSize: 5};
      const shallowWrapper = shallow(<ShoeInfo {...customProps} />);
      shallowWrapper.find({testID: 'addToCart'}).simulate('press');
      shallowWrapper.find({testID: 'showProduct'}).simulate('press');

      it('THEN should addToCart and showProduct should be called', () => {
        expect(customProps.addToCart).toBeCalledTimes(1);
        expect(customProps.showProduct).toBeCalledTimes(1);
      });
    });
  });
});
