import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
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
    </SafeAreaView>
  );
};

export default HomeScreen;
