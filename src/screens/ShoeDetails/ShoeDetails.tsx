import React from 'react';
import {View} from 'react-native';

import Carousel from '../../components/common/Shoe/Carousel';
import ShoeInfo from '../../components/common/Shoe/ShoeInfo';
import styles from './styles';

const ShoesDetails: React.FC<ShoesDetailsProps> = ({currentShoe, cart, setAddToCart}) => (
  <View style={styles.container}>
    <Carousel shoe={currentShoe} width={300} />
    <ShoeInfo shoe={currentShoe} cart={cart} addToCart={setAddToCart} twoSection />
  </View>
);

export default ShoesDetails;
