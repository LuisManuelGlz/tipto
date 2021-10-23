import React, { useContext } from 'react';
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
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';

type BillScreenNavigationProp = StackNavigationProp<AppStackParamList, 'Bill'>;

type Props = {
  route: RouteProp<AppStackParamList, 'Bill'>;
};

const BillScreen = ({ route }: Props) => {
  const navigation = useNavigation<BillScreenNavigationProp>();
  const { setPayment } = useContext(AppContext);
  const [totalBill, setTotalBill] = useState('');

  const { id, photoSource } = route.params;

  const onDone = () => {
    setPayment(Number(totalBill));
    navigation.navigate('Home');
  };

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
          source={require('../../assets/receipt.png')}
        />
      </SharedElement>
      <Text>What was the total of the bill?</Text>
      <TextInput
        keyboardType="decimal-pad"
        onChangeText={(text) => setTotalBill(text)}
        style={{ width: 100, backgroundColor: 'white' }}
        defaultValue={totalBill}
      />
      <Button title="Done" onPress={onDone} />
    </SafeAreaView>
  );
};

export default BillScreen;
