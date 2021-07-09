import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 30,
    height: 30,
  },
  optionContainer: {
    paddingHorizontal: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    paddingVertical: 12,
  },
  textOption: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
  },
  containerNotification: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    paddingLeft: 1,
    paddingTop: 1,
  },
  notification: {
    color: 'red',
    fontSize: 12,
  },
});
