import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  image: {
    marginRight: 15,
    width: 50,
    height: 50,
  },
  goToBillScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#F59E0B',
  },
  goToPercentageScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#60A5FA',
  },
  goToPeopleScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#00CBA9',
  },
});
