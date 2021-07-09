import Cart from './Cart';
import {StoreService} from '../../redux/StoreService';
import {putCurrentShoe, putClearCart} from '../../redux/actions';

export const mapStateToProps = state => ({
  cart: state.shoes.cart,
});

export const mapDispatchToProps = dispatch => ({
  setCurrentShoe: shoe => {
    dispatch(putCurrentShoe(shoe));
  },
  setClearCart: () => {
    dispatch(putClearCart());
  },
});

const CartContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
