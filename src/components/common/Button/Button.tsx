import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import {primaryColor} from '../../../constants';

const CustomButton: React.FC<CustomButton> = ({
  color = primaryColor,
  onPress,
  text = null,
  styleButton = {},
  styleText = {},
  children = <></>,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, styleButton, {backgroundColor: color}]}>
    {text && <Text style={[styles.text, styleText]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

export default CustomButton;
