import React from 'react';
import {shallow} from 'enzyme';

import Menu from '../Menu';

describe('Menu component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      navigation: {navigate: jest.fn()},
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<Menu {...testProps} />);

      it('THEN should display a regular Menu', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe('WHEN the menu option is pressed', () => {
      const shallowWrapper = shallow(<Menu {...testProps} />);
      shallowWrapper.find('ForwardRef').at(0).simulate('press');

      it('THEN navigation function should be called', () => {
        expect(testProps.navigation.navigate).toBeCalledTimes(1);
      });
    });
  });
});
