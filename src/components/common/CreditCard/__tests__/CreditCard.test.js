import React from 'react';
import {shallow} from 'enzyme';

import CreditCard from '../CreditCard';

jest.useFakeTimers();
jest.spyOn(React, 'useEffect').mockImplementation(f => f());
const realUseState = React.useState;
jest.spyOn(React, 'useState');
const mockUseStateInitialValues = (values = []) => {
  return values.forEach(v => React.useState.mockImplementationOnce(() => realUseState(v)));
};

describe('CreditCard component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      name: 'Daniel',
      number: '1234',
      date: 1214,
      ccv: 123,
      rotate: true,
    };

    describe('WHEN the component is rendered with rotate true', () => {
      const shallowWrapper = shallow(<CreditCard {...testProps} />);

      it('THEN should display a regular CreditCard', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe('WHEN the component is rendered with rotate false and call rotateCard function', () => {
      mockUseStateInitialValues([0, true]);
      const customProps = {...testProps, rotate: false};
      const shallowWrapper = shallow(<CreditCard {...customProps} />);
      jest.runOnlyPendingTimers();

      it('THEN should display a regular CreditCard and call originCard function', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });
  });
});
