import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 200,
    marginVertical: 64,
  },
  title: {
    fontSize: 32,
    color: Colors.light,
    textAlign: 'center',
  },
  description: {
    color: Colors.light,
    textAlign: 'center',
  },
});
