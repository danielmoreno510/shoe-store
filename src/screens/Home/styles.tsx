import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from '../../utils/responsiveUtils';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: widthPercentageToDP('5%'),
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    paddingTop: 8,
    fontSize: 18,
    textAlign: 'justify',
  },
  button: {
    marginTop: 40,
  },
});
