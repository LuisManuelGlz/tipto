import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { AppStackParamList } from '../../navigation/AppNavigator';
import Colors from '../../styles/Colors';

type PercentageScreenNavigationProp = StackNavigationProp<AppStackParamList, 'Percentage'>;

const BillScreen = () => {
  const navigation = useNavigation<PercentageScreenNavigationProp>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
      }}>
      <Text>What was the total of the bill?</Text>
      <TextInput
        keyboardType="decimal-pad"
        style={{ width: 100, backgroundColor: 'white' }}
      />
      <Button title="Done" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

export default BillScreen;
