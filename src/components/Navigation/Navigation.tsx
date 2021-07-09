import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderOptions from './HeaderOptions';
import Home from '../../screens/Home';
import Menu from '../../screens/Menu';
import ShoesList from '../../screens/ShoesList';
import ShoeDetails from '../../screens/ShoeDetails';
import Cart from '../../screens/Cart';
import Pay from '../../screens/Pay';
import About from '../../screens/About';
import styles from './styles';
import {primaryColor} from '../../constants';

const Stack = createStackNavigator();
const screenOptions = {headerStyle: {shadowColor: primaryColor}, headerTintColor: primaryColor};

const Navigation: React.FC<NavigationProps> = ({cart}) => {
  const headerRight = ({navigation}: Navigation) => ({
    headerRight: () => (
      <HeaderOptions badge={cart.length} changeScreen={() => navigation.navigate('Cart')} position="right" />
    ),
  });

  const headerLeft = ({navigation}) => ({
    headerLeft: () => <HeaderOptions changeScreen={() => navigation.navigate('Menu')} position="left" />,
  });

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator headerMode="screen" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({...headerLeft({navigation}), ...headerRight({navigation})})}
          />
          <Stack.Screen name="Shoes List" component={ShoesList} options={headerRight} />
          <Stack.Screen name="Shoe Detail" component={ShoeDetails} options={headerRight} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Pay" component={Pay} />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={({navigation}) => ({
              ...headerLeft({navigation}),
              gestureDirection: 'horizontal-inverted',
            })}
          />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Navigation;
