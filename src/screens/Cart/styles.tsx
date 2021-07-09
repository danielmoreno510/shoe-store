import {StyleSheet} from 'react-native';

import {primaryColor} from '../../constants';
import {widthPercentageToDP} from '../../utils/responsiveUtils';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: widthPercentageToDP('5%'),
    backgroundColor: 'white',
  },
  shoes: {
    flexDirection: 'row',
    borderBottomColor: primaryColor,
    borderBottomWidth: 1,
    padding: 12,
  },
  empty: {
    fontSize: 24,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    marginBottom: 40,
  },
  clearCar: {
    width: 140,
    alignSelf: 'center',
    margin: 20,
  },
});
