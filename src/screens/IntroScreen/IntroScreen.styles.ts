import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import { FontFamily } from '../../styles/Font';

export default StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginVertical: 64,
    width: 320,
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: FontFamily.ComfortaaBold,
    color: Colors.light,
  },
  description: {
    textAlign: 'center',
    fontFamily: FontFamily.ComfortaaRegular,
    color: Colors.light,
  },
});
