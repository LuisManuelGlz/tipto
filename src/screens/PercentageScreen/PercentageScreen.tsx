import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';

const PercentageScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
      }}>
      <Text>What percentage of tip would you like to give?</Text>
      <TextInput
        keyboardType="decimal-pad"
        style={{ width: 100, backgroundColor: 'white' }}
      />
      <Button title="Next" onPress={() => navigation.navigate('People')} />
    </SafeAreaView>
  );
};

export default PercentageScreen;
