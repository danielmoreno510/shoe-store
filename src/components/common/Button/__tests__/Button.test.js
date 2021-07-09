import React from 'react';
import {shallow} from 'enzyme';

import Button from '../Button';

describe('Button component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      primaryColor: '#002337',
      onPress: jest.fn(),
    };

    describe('WHEN the component is rendered without props', () => {
      const shallowWrapper = shallow(<Button {...testProps} />);

      it('THEN should display a regular button', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe('WHEN the component is rendered with props', () => {
      const customProps = {
        ...testProps,
        text: 'Test',
        disabled: true,
        styleButton: {color: 'red'},
        styleText: {color: 'red'},
      };
      const shallowWrapper = shallow(<Button {...customProps} />);

      it('THEN should display a regular button', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });
  });
});
