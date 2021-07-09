import {FETCH_SHOES_LIST, PUT_SHOES_LIST, PUT_ADD_TO_CART, PUT_CURRENT_SHOE, PUT_CLEAR_CART} from './types';

export const fetchShoesList = () => ({
  type: FETCH_SHOES_LIST,
});

export const putShoesList = shoesList => ({
  type: PUT_SHOES_LIST,
  shoesList,
});

export const putAddToCart = shoe => ({
  type: PUT_ADD_TO_CART,
  shoe,
});

export const putCurrentShoe = currentShoe => ({
  type: PUT_CURRENT_SHOE,
  currentShoe,
});

export const putClearCart = () => ({
  type: PUT_CLEAR_CART,
});

export default {
  fetchShoesList,
  putShoesList,
};
