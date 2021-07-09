import produce from 'immer';

import {
  FETCH_SHOES_LIST,
  PUT_SHOES_LIST,
  PUT_ADD_TO_CART,
  PUT_CURRENT_SHOE,
  PUT_CLEAR_CART,
} from '../actions/types';

export const initialState = {
  isFetchingShoesList: true,
  shoesList: [],
  currentShoe: {},
  cart: [],
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_SHOES_LIST:
        draft.isFetchingShoesList = true;
        break;
      case PUT_SHOES_LIST:
        action.shoesList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        draft.shoesList = action.shoesList;
        draft.isFetchingShoesList = false;
        break;
      case PUT_ADD_TO_CART:
        draft.cart = [...draft.cart, action.shoe];
        break;
      case PUT_CURRENT_SHOE:
        draft.currentShoe = action.currentShoe;
        break;
      case PUT_CLEAR_CART:
        draft.cart = [];
        break;
      default:
        break;
    }
  });
