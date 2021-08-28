import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import styles from './HomeScreen.styles';
import { AppStackParamList } from '../../navigation/AppNavigator';

type AppScreenNavigationProp = StackNavigationProp<AppStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<AppScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.goToBillScreen}
        onPress={() => navigation.navigate('Bill')}>
        <Image
          style={styles.image}
          source={require('../../assets/receipt.png')}
        />
        <Text>Enter the total of the bill</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.goToPercentageScreen}
        onPress={() => navigation.navigate('Percentage')}>
        <Image
          style={styles.image}
          source={require('../../assets/money-box.png')}
        />
        <Text>Enter percentage of tip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.goToPeopleScreen}
        onPress={() => navigation.navigate('People')}>
        <Image style={styles.image} source={require('../../assets/team.png')} />
        <Text>Enter the number of people</Text>
      </TouchableOpacity>
      <Button title="RESET" onPress={async () => await AsyncStorage.clear()} />
    </SafeAreaView>
  );
};

export default HomeScreen;
