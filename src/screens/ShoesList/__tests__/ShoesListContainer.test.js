import {mapStateToProps, mapDispatchToProps} from '../ShoesListContainer';

describe('GIVEN Shoe container mapStateToProps() is defined', () => {
  describe('WHEN mapStateToProps is called with mockState', () => {
    const props = {
      isFetchingShoesList: false,
      shoesList: [],
      cart: [],
    };

    const mockState = {
      shoes: {...props},
    };

    it('THEN return needed props', () => {
      expect(mapStateToProps(mockState)).toEqual(props);
    });
  });

  describe('WHEN the getShoes action is called', () => {
    it('THEN make a dispatch to FETCH_SHOES_LIST action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).getShoes();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: 'FETCH_SHOES_LIST',
      });
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
});
