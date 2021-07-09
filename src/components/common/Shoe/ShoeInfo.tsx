import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import {filter, find} from 'lodash';

import Button from '../Button';
import styles, {pickerSelectStyles} from './styles';

const ShoeInfo: React.FC<ShoeProps> = ({
  shoe,
  cart,
  addToCart,
  showProduct,
  twoSection,
  oneSection,
  newSize,
}) => {
  const [size, setSize] = React.useState<number>(4.5);
  const getQuantity = () => {
    const quantityShoes = filter(cart, ['id', shoe.id]);
    const shoesAvailable = find(shoe.sizes, ['value', size]);
    return shoesAvailable.quantity - quantityShoes.length;
  };

  return (
    <View style={[twoSection && styles.infoContainer, oneSection && styles.oneInfoContainer]}>
      <View style={styles.sectionContainer}>
        <Text style={styles.reference}>{shoe.reference}</Text>
        <Text style={styles.brand}>{shoe.brand}</Text>
        <View style={styles.sizeContainer}>
          <Text style={styles.size}>Size: </Text>
          {!newSize ? (
            <View style={styles.quantityContainer}>
              <View style={styles.sizeSelectContainer}>
                <RNPickerSelect
                  onValueChange={value => setSize(value)}
                  items={shoe.sizes}
                  value={size}
                  style={pickerSelectStyles}
                />
              </View>
              <Text style={styles.quantity}>{` ${getQuantity()}U`}</Text>
            </View>
          ) : (
            <Text style={styles.size}>{newSize}</Text>
          )}
        </View>
      </View>
      <View style={[styles.sectionContainer]}>
        <Text style={styles.price}>{`$${shoe.price}`}</Text>
        <View style={styles.buttonsContainer}>
          {addToCart && getQuantity() > 0 && (
            <Button testID="addToCart" onPress={() => addToCart({...shoe, size})} styleButton={styles.button}>
              <Icon type="MaterialIcons" name="shopping-cart" style={styles.icon} />
            </Button>
          )}
          {showProduct && (
            <Button testID="showProduct" onPress={() => showProduct(shoe)} styleButton={styles.button}>
              <Icon type="MaterialIcons" name="visibility" style={styles.icon} />
            </Button>
          )}
        </View>
        {!oneSection && <Text>{`Date: ${shoe.date}`}</Text>}
      </View>
    </View>
  );
};

export default ShoeInfo;
