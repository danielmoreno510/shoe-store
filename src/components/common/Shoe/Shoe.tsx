import React from 'react';
import {View} from 'react-native';

import Carousel from './Carousel';
import ShoeInfo from './ShoeInfo';
import styles from './styles';

const Shoe: React.FC<ShoeProps> = ({shoe, cart, addToCart, showProduct}) => (
  <View style={styles.shoe}>
    <Carousel shoe={shoe} />
    <View style={styles.shoeInfoContainer}>
      <ShoeInfo shoe={shoe} cart={cart} addToCart={addToCart} showProduct={showProduct} />
    </View>
  </View>
);

export default Shoe;
