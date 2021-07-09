import React from 'react';
import {shallow} from 'enzyme';

import Home from '../Home';

describe('Home component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      navigation: {navigate: jest.fn()},
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<Home {...testProps} />);

      it('THEN should display a regular Home', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe('WHEN the shoes button is pressed', () => {
      const shallowWrapper = shallow(<Home {...testProps} />);
      shallowWrapper.find('CustomButton').simulate('press');

      it('THEN navigation function should be called', () => {
        expect(testProps.navigation.navigate).toBeCalledTimes(1);
      });
    });
  });
});
