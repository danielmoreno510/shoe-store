import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {sum, some, isEmpty} from 'lodash';

import CreditCard from '../../components/common/CreditCard';
import Input from '../../components/common/Input';
import {validateCreditCard, validateCreditCardDate, validateCreditCardCcv} from '../../utils/formUtils';
import Button from '../../components/common/Button';
import styles from './styles';
import {Alert} from 'react-native';

const Pay: React.FC<PayProps> = ({cart, setPayCart, navigation}) => {
  const total = sum(cart.map(shoe => shoe.price));
  const [rotate, setRotate] = React.useState(false);
  const [creditCard, setCreditCard] = React.useState({
    name: '',
    number: '',
    date: '',
    ccv: '',
  });

  const [placeholder, setPlaceholder] = React.useState({
    name: 'Card Name',
    number: 'Card Number',
    date: 'MM/YY',
    ccv: 'CCV',
  });

  const changeCreditCard = newValue => {
    setCreditCard(oldValue => ({...oldValue, ...newValue}));
  };

  const changePlaceholder = newValue => {
    setPlaceholder(oldValue => ({...oldValue, ...newValue}));
  };

  const payed = () => {
    Alert.alert('Paid product', 'Thank you for your purchase', [{text: 'OK', onPress: () => setPayCart()}]);
  };

  React.useEffect(() => {
    isEmpty(cart) && navigation.navigate('Home');
  }, [cart, navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.total}>{`Total to pay: $${total}`}</Text>
      <View style={styles.content}>
        <View style={styles.creditCard}>
          <CreditCard
            name={creditCard.name}
            number={creditCard.number}
            date={creditCard.date}
            ccv={creditCard.ccv}
            rotate={rotate}
          />
        </View>
        <View style={styles.form}>
          <Input
            style={[styles.textInput]}
            value={creditCard.name}
            placeholder={placeholder.name}
            onChangeText={value => changeCreditCard({name: value})}
            onFocus={() => changePlaceholder({name: ''})}
            onBlur={() => changePlaceholder({name: 'Card Name'})}
            secureTextEntry={false}
          />
          <Input
            style={[styles.textInput]}
            value={creditCard.number}
            placeholder={placeholder.number}
            onChangeText={value =>
              validateCreditCard(value) !== false && changeCreditCard({number: validateCreditCard(value)})
            }
            onFocus={() => changePlaceholder({number: ''})}
            onBlur={() => changePlaceholder({number: 'Card Number'})}
            keyboardType={'numeric'}
            secureTextEntry={false}
          />
          <Input
            style={[styles.textInput]}
            value={creditCard.date}
            placeholder={placeholder.date}
            onChangeText={value =>
              validateCreditCardDate(value) !== false &&
              changeCreditCard({date: validateCreditCardDate(value)})
            }
            onFocus={() => changePlaceholder({date: ''})}
            onBlur={() => changePlaceholder({date: 'MM/YY'})}
            secureTextEntry={false}
            keyboardType={'numeric'}
          />
          <Input
            style={[styles.textInput]}
            value={creditCard.ccv}
            placeholder={placeholder.ccv}
            onChangeText={value => validateCreditCardCcv(value) && changeCreditCard({ccv: value})}
            onFocus={() => {
              changePlaceholder({ccv: ''});
              setRotate(true);
            }}
            onBlur={() => {
              changePlaceholder({ccv: 'CCV'});
              setRotate(false);
            }}
            secureTextEntry={false}
            keyboardType={'numeric'}
          />
        </View>
        {!some(creditCard, isEmpty) && (
          <View style={styles.button}>
            <Button text="Pay" onPress={payed} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Pay;
