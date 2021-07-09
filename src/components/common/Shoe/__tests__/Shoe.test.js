import React from 'react';
import {shallow} from 'enzyme';

import Shoe from '../Shoe';

describe('Shoe component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      shoe: {},
      cart: [],
      addToCart: jest.fn(),
      showProduct: jest.fn(),
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<Shoe {...testProps} />);

      it('THEN should display a regular Shoe', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });
  });
});
