import {StyleSheet} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from '../../utils/responsiveUtils';

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
  subtitle: {
    fontSize: 24,
  },
  titleContainer: {
    padding: 4,
    paddingHorizontal: 12,
  },
  itemsContainer: {
    padding: 4,
    paddingHorizontal: 18,
  },
  item: {
    fontSize: 20,
  },
  text: {
    paddingTop: 8,
    fontSize: 16,
    textAlign: 'justify',
  },
  image: {
    marginTop: 20,
    width: widthPercentageToDP('90%'),
    height: heightPercentageToDP(`${widthPercentageToDP('100%') / 40}`),
  },
});
