import React from 'react';
import {shallow} from 'enzyme';

import Carousel, {ShoeImage} from '../Carousel';

jest.spyOn(React, 'useState').mockImplementation(v => [v, jest.fn()]);

describe('Carousel component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      shoe: {images: []},
    };

    describe('WHEN the component is rendered', () => {
      const testPropsShoeImage = {item: {}, size: 20};
      const shallowWrapper = shallow(<Carousel {...testProps} />);
      const shallowSubWrapper = shallow(<ShoeImage {...testPropsShoeImage} />);
      shallowWrapper.find('mockConstructor').props().renderItem({item: {}});
      shallowWrapper.find('mockConstructor').props().onSnapToItem();

      it('THEN should display a regular Carousel', () => {
        expect(shallowWrapper).toMatchSnapshot();
        expect(shallowSubWrapper).toMatchSnapshot();
      });
    });
  });
});
