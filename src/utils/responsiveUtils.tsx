import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const toFloat = (percent: string | number): number =>
  typeof percent === 'number' ? percent : parseFloat(percent);

export const widthPercentageToDP = (widthPercent: string): number => {
  const calcPercent = (screenWidth * toFloat(widthPercent)) / 100;
  return PixelRatio.roundToNearestPixel(calcPercent);
};

export const heightPercentageToDP = (heightPercent: string): number => {
  const calcPercent = (screenHeight * toFloat(heightPercent)) / 100;
  return PixelRatio.roundToNearestPixel(calcPercent);
};
