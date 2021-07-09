import {mapStateToProps} from '../NavigationContainer';

describe('GIVEN Login container mapStateToProps() and mapDispatchToProps() are defined', () => {
  describe('WHEN mapStateToProps is called with mockState', () => {
    const props = {
      cart: [],
    };

    const mockState = {
      shoes: {cart: props.cart},
    };

    it('THEN return needed props', () => {
      expect(mapStateToProps(mockState)).toEqual(props);
    });
  });
});
