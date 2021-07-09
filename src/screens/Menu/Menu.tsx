import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View, Text} from 'react-native';
import {Icon} from 'native-base';

import styles from './styles';
import {menuOptions} from '../../constants';

const Menu: React.FC<Navigation> = ({navigation}) => {
  const changeScreeen = (screen: Page) => () => navigation.navigate(screen);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        {menuOptions.map(option => (
          <View key={option.name} style={styles.optionContainer}>
            <TouchableOpacity style={styles.option} onPress={changeScreeen(option.name)}>
              <View style={styles.rowContainer}>
                <Icon type="MaterialIcons" name={option.icon} />
                <Text style={styles.textOption}>{option.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
