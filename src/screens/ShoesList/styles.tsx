import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from '../../utils/responsiveUtils';

export default StyleSheet.create({
  container: {
    padding: widthPercentageToDP('5%'),
    flex: 1,
    backgroundColor: 'white',
  },
});
