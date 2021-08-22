import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
      }}>
      <Text>Welcome to tipto</Text>
      <Text>
        The app that will help you divide the total of a bill among your friends
        in a very easy way
      </Text>
      <Button title="Let's get started 😎" />
    </SafeAreaView>
  );
};

export default StartScreen;
