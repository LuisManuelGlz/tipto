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
import styles from './PercentageScreen.styles';

type PeopleScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'People'
>;

type Props = {
  route: RouteProp<AppStackParamList, 'People'>;
};

const PercentageScreen = ({ route }: Props) => {
  const navigation = useNavigation<PeopleScreenNavigationProp>();

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
        <Image
          style={styles.image}
          source={require('../../assets/money-box.png')}
        />
      </SharedElement>
      <Text>What percentage of tip would you like to give?</Text>
      <TextInput
        keyboardType="decimal-pad"
        style={{ width: 100, backgroundColor: 'white' }}
      />
      <Button title="Done" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

export default PercentageScreen;
