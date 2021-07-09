import {StyleSheet} from 'react-native';

import {primaryColor} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLeftContainer: {
    marginLeft: 12,
  },
  iconColor: {
    color: primaryColor,
  },
  headerRightContainer: {
    marginRight: 12,
  },
  badge: {
    marginBottom: -12,
    marginLeft: 14,
    height: 22,
    width: 22,
    zIndex: 1,
  },
  badgeText: {
    color: 'white',
  },
});
