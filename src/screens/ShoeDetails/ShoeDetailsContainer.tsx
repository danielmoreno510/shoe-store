import ShoeDetails from './ShoeDetails';
import {StoreService} from '../../redux/StoreService';
import {putAddToCart} from '../../redux/actions';

export const mapStateToProps = state => ({
  currentShoe: state.shoes.currentShoe,
  cart: state.shoes.cart,
});

export const mapDispatchToProps = dispatch => ({
  setAddToCart: shoe => {
    dispatch(putAddToCart(shoe));
  },
});

const ShoeDetailsContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(ShoeDetails);

export default ShoeDetailsContainer;
