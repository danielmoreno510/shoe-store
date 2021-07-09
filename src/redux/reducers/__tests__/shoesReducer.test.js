import shoesReducer, {initialState} from '../shoesReducer';
import {
  fetchShoesList,
  putShoesList,
  putAddToCart,
  putCurrentShoe,
  putClearCart,
} from '../../actions/shoesActions';

describe('Shoes Reducer', () => {
  describe('GIVEN the initial state', () => {
    describe('WHEN initialized', () => {
      it('THEN returns the initial state', () => {
        expect(shoesReducer(undefined, {})).toEqual(initialState);
      });
    });

    describe.each`
      action                | expectedState
      ${fetchShoesList()}   | ${{}}
      ${putShoesList([])}   | ${{isFetchingShoesList: false}}
      ${putAddToCart({})}   | ${{cart: [{}]}}
      ${putCurrentShoe({})} | ${{currentShoe: {}}}
      ${putClearCart()}     | ${{cart: []}}
    `('WHEN the “$action“ action is dispatched', ({action, expectedState}) => {
      it('THEN should return the correct state', () => {
        expect(shoesReducer(initialState, action)).toEqual({
          ...initialState,
          ...expectedState,
        });
      });
    });
  });
});
