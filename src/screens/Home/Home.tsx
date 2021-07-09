import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import Button from '../../components/common/Button';
import styles from './styles';

const Home: React.FC<Navigation> = ({navigation}) => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>Sneaker City</Text>
    <Text style={styles.text}>Welcome to Sneaker City, enjoy our shoes</Text>
    <View style={styles.button}>
      <Button text="Shoes" onPress={() => navigation.navigate('Shoes List')} />
    </View>
  </ScrollView>
);

export default Home;
