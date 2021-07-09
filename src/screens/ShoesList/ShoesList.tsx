import React from 'react';
import {View, FlatList} from 'react-native';
import {Spinner} from 'native-base';
import {isEmpty} from 'lodash';

import Shoe from '../../components/common/Shoe/Shoe';
import styles from './styles';
import {primaryColor} from '../../constants';

const ShoesList: React.FC<ShoesListProps> = ({
  isFetchingShoesList,
  shoesList,
  cart,
  getShoes,
  setAddToCart,
  setCurrentShoe,
  navigation,
}) => {
  React.useEffect(() => {
    isEmpty(shoesList) && getShoes();
  }, [shoesList, getShoes]);

  const addToCart = (shoe: Shoe) => setAddToCart(shoe);
  const showProduct = (shoe: Shoe) => {
    navigation.navigate('Shoe Detail');
    setCurrentShoe(shoe);
  };

  return (
    <View style={styles.container}>
      {!isFetchingShoesList ? (
        <FlatList
          data={shoesList}
          renderItem={({item}) => (
            <Shoe shoe={item} cart={cart} addToCart={addToCart} showProduct={showProduct} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Spinner color={primaryColor} />
      )}
    </View>
  );
};

export default ShoesList;
