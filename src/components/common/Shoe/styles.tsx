import {StyleSheet} from 'react-native';

import {primaryColor} from '../../../constants';

export default StyleSheet.create({
  shoe: {
    borderBottomColor: primaryColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignContent: 'center',
    padding: 20,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
  },
  shoeInfoContainer: {
    flex: 1,
  },
  carouselContainer: {
    alignItems: 'center',
    marginBottom: -20,
  },
  reference: {
    fontSize: 22,
    fontWeight: '500',
  },
  brand: {
    fontSize: 18,
  },
  price: {
    fontSize: 28,
    color: primaryColor,
    fontWeight: 'bold',
    marginTop: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oneInfoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sizeContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 12,
  },
  quantityContainer: {
    flexDirection: 'row',
  },
  size: {
    fontSize: 20,
  },
  quantity: {
    fontSize: 20,
  },
  sizeSelectContainer: {
    borderWidth: 1,
    borderColor: primaryColor,
    width: 40,
    borderRadius: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
  },
  button: {
    margin: 12,
    width: 54,
  },
  icon: {
    color: 'white',
  },
  image: {
    width: 180,
    height: 180,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputAndroid: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
