import {mapStateToProps, mapDispatchToProps} from '../ShoeDetailsContainer';

describe('GIVEN Shoe container mapStateToProps() is defined', () => {
  describe('WHEN mapStateToProps is called with mockState', () => {
    const props = {
      currentShoe: {},
      cart: [],
    };

    const mockState = {
      shoes: {...props},
    };

    it('THEN return needed props', () => {
      expect(mapStateToProps(mockState)).toEqual(props);
    });
  });

  describe('WHEN the setAddToCart action is called', () => {
    it('THEN make a dispatch to PUT_ADD_TO_CART action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).setAddToCart({});
      expect(dispatch.mock.calls[0][0]).toEqual({
        shoe: {},
        type: 'PUT_ADD_TO_CART',
      });
    });
  });
});
