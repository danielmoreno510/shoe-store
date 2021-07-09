import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import Carousel from '../../components/common/Shoe/Carousel';
import ShoeInfo from '../../components/common/Shoe/ShoeInfo';
import Button from '../../components/common/Button';
import styles from './styles';

const Cart: React.FC<CartProps> = ({cart, setCurrentShoe, setClearCart, navigation}) => {
  const showProduct = (shoe: Shoe) => {
    navigation.navigate('Shoe Detail');
    setCurrentShoe(shoe);
  };

  return (
    <ScrollView style={styles.container}>
      {cart.length > 0 ? (
        cart.map((shoe, index) => (
          <View key={index} style={styles.shoes}>
            <Carousel shoe={shoe} width={100} />
            <ShoeInfo shoe={shoe} showProduct={() => showProduct(shoe)} oneSection newSize={shoe.size} />
          </View>
        ))
      ) : (
        <Text style={styles.empty}>You have no products in your cart</Text>
      )}
      {cart.length > 0 && (
        <View style={styles.buttonsContainer}>
          <View style={styles.clearCar}>
            <Button text="Clear Cart" onPress={() => setClearCart()} color="#af1313" />
          </View>
          <Button text="Pay" onPress={() => navigation.navigate('Pay')} />
        </View>
      )}
    </ScrollView>
  );
};

export default Cart;
