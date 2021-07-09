type InputProps = {
  style: any;
  value: string;
  placeholder: string;
  onChangeText(value: 'string' | any): any;
  onFocus(): any;
  onBlur(): any;
  keyboardType?: any;
  secureTextEntry: boolean;
};
