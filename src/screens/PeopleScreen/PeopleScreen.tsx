import React from 'react';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Colors from '../../styles/Colors';

const PeopleScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
      }}>
      <Text>How many people will be splitting the bill?</Text>
      <TextInput
        keyboardType="decimal-pad"
        defaultValue="1"
        style={{ width: 100, backgroundColor: 'white' }}
      />
      <Button title="Done" onPress={() => console.log('...')} />
    </SafeAreaView>
  );
};

export default PeopleScreen;
