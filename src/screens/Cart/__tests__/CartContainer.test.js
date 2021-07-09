import {mapStateToProps, mapDispatchToProps} from '../CartContainer';

describe('GIVEN Cart container mapStateToProps() is defined', () => {
  describe('WHEN mapStateToProps is called with mockState', () => {
    const props = {
      cart: [],
    };

    const mockState = {
      shoes: {...props},
    };

    it('THEN return needed props', () => {
      expect(mapStateToProps(mockState)).toEqual(props);
    });
  });

  describe('WHEN the setCurrentShoe action is called', () => {
    it('THEN make a dispatch to PUT_CURRENT_SHOE action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).setCurrentShoe({});
      expect(dispatch.mock.calls[0][0]).toEqual({
        currentShoe: {},
        type: 'PUT_CURRENT_SHOE',
      });
    });
  });

  describe('WHEN the setClearCart action is called', () => {
    it('THEN make a dispatch to PUT_CLEAR_CART action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).setClearCart();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'PUT_CLEAR_CART',
      });
    });
  });
});
