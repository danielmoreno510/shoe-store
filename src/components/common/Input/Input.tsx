import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const CustomInput: React.FC<InputProps> = ({
  style,
  value,
  placeholder,
  onChangeText,
  onFocus,
  onBlur,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={[style, styles.input]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor={'#aaaaaa'}
    />
  );
};

export default CustomInput;
