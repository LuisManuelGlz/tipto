import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
      }}>
      <Button title="Calculate" onPress={() => navigation.navigate('Bill')} />
      <Button title="RESET" onPress={async () => await AsyncStorage.clear()} />
    </SafeAreaView>
  );
};

export default HomeScreen;
