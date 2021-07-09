import React from 'react';
import {shallow} from 'enzyme';

import About from '../About';

describe('About component', () => {
  describe('GIVEN a set of valid props', () => {
    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<About />);

      it('THEN should display a regular About', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });
  });
});
