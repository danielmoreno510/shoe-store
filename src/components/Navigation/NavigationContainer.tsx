import Navigation from './Navigation';
import {StoreService} from '../../redux/StoreService';

export const mapStateToProps = state => ({
  cart: state.shoes.cart,
});

const NavigationContainer = StoreService.connect(mapStateToProps)(Navigation);

export default NavigationContainer;
