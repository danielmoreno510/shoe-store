import React from 'react';
import {shallow} from 'enzyme';

import ShoesList from '../ShoesList';

jest.spyOn(React, 'useEffect').mockImplementation(f => f());

describe('ShoesList component', () => {
  describe('GIVEN a set of valid props', () => {
    const testProps = {
      isFetchingShoesList: true,
      shoesList: [],
      cart: [{}],
      getShoes: jest.fn(),
      setAddToCart: jest.fn(),
      setCurrentShoe: jest.fn(),
      navigation: {navigate: jest.fn()},
    };

    describe('WHEN the component is rendered', () => {
      const shallowWrapper = shallow(<ShoesList {...testProps} />);

      it('THEN should display a regular ShoesList', () => {
        expect(shallowWrapper).toMatchSnapshot();
      });
    });

    describe('WHEN the addToCart and showProduct functions are called', () => {
      const customProps = {...testProps, isFetchingShoesList: false, shoesList: [{}]};
      const shallowWrapper = shallow(<ShoesList {...customProps} />);
      const flatList = shallowWrapper.find('FlatList');
      const item = flatList.renderProp('renderItem')({});
      item.props().addToCart();
      item.props().showProduct();
      flatList.props().keyExtractor({item: {id: 1}});

      it('THEN setAddToCart and setCurrentShoe function should be called', () => {
        expect(testProps.setAddToCart).toBeCalledTimes(1);
        expect(testProps.setCurrentShoe).toBeCalledTimes(1);
      });
    });
  });
});
