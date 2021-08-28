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
  },
  description: {
    textAlign: 'center',
  },
  skipButton: {
    fontSize: 20,
  },
  buttonCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
});
