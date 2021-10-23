import React, { useContext, useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedElement } from 'react-navigation-shared-element';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import styles from './HomeScreen.styles';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { AppContext } from '../../context/AppContext';

type AppScreenNavigationProp = StackNavigationProp<AppStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<AppScreenNavigationProp>();
  const { payment } = useContext(AppContext);

  useEffect(() => {
    console.log(payment);
  }, [payment]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.goToBillScreen}
        onPress={() =>
          navigation.navigate('Bill', {
            id: 'bill',
            photoSource: '../../assets/receipt.png',
          })
        }>
        <SharedElement id="item.bill.photo">
          <Image
            style={styles.image}
            source={require('../../assets/receipt.png')}
          />
        </SharedElement>
        <Text>Enter the total of the bill</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.goToPercentageScreen}
        onPress={() =>
          navigation.navigate('Percentage', {
            id: 'percentage',
            photoSource: '../../assets/money-box.png',
          })
        }>
        <SharedElement id="item.percentage.photo">
          <Image
            style={styles.image}
            source={require('../../assets/money-box.png')}
          />
        </SharedElement>
        <Text>Enter percentage of tip</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.goToPeopleScreen}
        onPress={() =>
          navigation.navigate('People', {
            id: 'people',
            photoSource: '../../assets/team.png',
          })
        }>
        <SharedElement id="item.people.photo">
          <Image
            style={styles.image}
            source={require('../../assets/team.png')}
          />
        </SharedElement>
        <Text>Enter the number of people</Text>
      </TouchableOpacity>

      <Button title="RESET" onPress={async () => await AsyncStorage.clear()} />
    </SafeAreaView>
  );
};

export default HomeScreen;
