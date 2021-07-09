import React from 'react';
import {shallow} from 'enzyme';

import Navigation from '../Navigation';

describe('Navigation component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      cart: [],
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<Navigation {...testProps} />);
      shallowWrapper.find('Screen').at(0).props().options({navigation: jest.fn()});

      it('THEN should display a regular Navigation', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });
  });
});
