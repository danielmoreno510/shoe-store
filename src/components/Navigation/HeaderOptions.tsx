import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Icon, Badge} from 'native-base';

import styles from './styles';

const HeaderOptions: React.FC<HeaderOptionsProps> = ({badge = 0, changeScreen, position}) => (
  <TouchableOpacity
    onPress={changeScreen}
    style={[position === 'left' ? styles.headerLeftContainer : styles.headerRightContainer]}>
    {!!badge && (
      <Badge warning style={styles.badge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </Badge>
    )}
    <Icon
      type="MaterialIcons"
      name={position === 'left' ? 'menu' : 'shopping-cart'}
      style={styles.iconColor}
    />
  </TouchableOpacity>
);

export default HeaderOptions;
