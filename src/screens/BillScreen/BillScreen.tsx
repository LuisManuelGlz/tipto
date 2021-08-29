import React from 'react';
import { Image, TextInput } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedElement } from 'react-navigation-shared-element';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { AppStackParamList } from '../../navigation/AppNavigator';
import Colors from '../../styles/Colors';
import styles from './BillScreen.styles';

type PercentageScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Percentage'
>;

type Props = {
  route: RouteProp<AppStackParamList, 'Percentage'>;
};

const BillScreen = ({ route }: Props) => {
  const navigation = useNavigation<PercentageScreenNavigationProp>();

  const { id, photoSource } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
      }}>
      <SharedElement id={`item.${id}.photo`}>
        <Image style={styles.image} source={require('../../assets/receipt.png')} />
      </SharedElement>
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
