import ShoesList from './ShoesList';
import {StoreService} from '../../redux/StoreService';
import {fetchShoesList, putAddToCart, putCurrentShoe} from '../../redux/actions';

export const mapStateToProps = state => ({
  isFetchingShoesList: state.shoes.isFetchingShoesList,
  shoesList: state.shoes.shoesList,
  cart: state.shoes.cart,
});

export const mapDispatchToProps = dispatch => ({
  getShoes: () => {
    dispatch(fetchShoesList());
  },
  setAddToCart: shoe => {
    dispatch(putAddToCart(shoe));
  },
  setCurrentShoe: shoe => {
    dispatch(putCurrentShoe(shoe));
  },
});

const ShoesListContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(ShoesList);

export default ShoesListContainer;
