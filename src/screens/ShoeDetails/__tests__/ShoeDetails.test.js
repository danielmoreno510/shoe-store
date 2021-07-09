import React from 'react';
import {shallow} from 'enzyme';

import ShoeDetails from '../ShoeDetails';

describe('ShoeDetails component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      currentShoe: {},
      cart: [],
      setAddToCart: jest.fn(),
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<ShoeDetails {...testProps} />);

      it('THEN should display a regular ShoeDetails', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });
  });
});
