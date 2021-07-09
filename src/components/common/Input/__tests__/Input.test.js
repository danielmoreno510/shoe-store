import React from 'react';
import {shallow} from 'enzyme';

import Input from '../Input';

describe('Input component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      style: {},
      value: 'test',
      placeholder: 'test',
      onChangeText: () => {},
      onFocus: () => {},
      onBlur: () => {},
      keyboardType: 'default',
      secureTextEntry: true,
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<Input {...testProps} />);

      it('THEN should display a regular Input', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });
  });
});
