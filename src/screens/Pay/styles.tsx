import {StyleSheet} from 'react-native';

import {widthPercentageToDP} from '../../utils/responsiveUtils';
import {primaryColor} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: widthPercentageToDP('5%'),
    backgroundColor: 'white',
  },
  total: {
    color: primaryColor,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 20,
  },
  creditCard: {
    display: 'flex',
    alignSelf: 'center',
  },
  form: {
    alignSelf: 'center',
    marginTop: 20,
  },
  textInput: {
    marginTop: 20,
    width: 284,
  },
  message: {
    fontSize: 20,
    color: '#555555',
    lineHeight: 24,
  },
  button: {
    padding: 40,
  },
});
