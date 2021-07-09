import Pay from './Pay';
import {StoreService} from '../../redux/StoreService';
import {putClearCart} from '../../redux/actions';

export const mapStateToProps = state => ({
  cart: state.shoes.cart,
});

export const mapDispatchToProps = dispatch => ({
  setPayCart: () => {
    dispatch(putClearCart());
  },
});

const PayContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(Pay);

export default PayContainer;
