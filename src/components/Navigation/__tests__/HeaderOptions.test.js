import React from 'react';
import {shallow} from 'enzyme';

import HeaderOptions from '../HeaderOptions';

describe('HeaderOptions component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      changeScreen: jest.fn(),
      position: 'left',
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<HeaderOptions {...testProps} />);

      it('THEN should display a regular HeaderOptions', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe('WHEN the component is rendered with badge', () => {
      const customProps = {...testProps, badge: 1, position: 'right'};
      const shallowWrapper = shallow(<HeaderOptions {...customProps} />);

      it('THEN should display a regular HeaderOptions', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });
  });
});
