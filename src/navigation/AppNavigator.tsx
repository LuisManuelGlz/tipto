import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { AppContext } from '../context/AppContext';
import BillScreen from '../screens/BillScreen';
import HomeScreen from '../screens/HomeScreen';
import PeopleScreen from '../screens/PeopleScreen';
import PercentageScreen from '../screens/PercentageScreen';
import IntroScreen from '../screens/IntroScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IS_INTRODUCTION_KEY } from '../constants/Storage';
import Colors from '../styles/Colors';

export type AppStackParamList = {
  Home: undefined;
  Intro: undefined;
  Bill: undefined;
  Percentage: undefined;
  People: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const { isIntroduction, setIsIntroduction } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  const getIsIntroduction = async () => {
    try {
      const value = await AsyncStorage.getItem(IS_INTRODUCTION_KEY);
      if (value !== null) {
        setIsIntroduction(false);
      }
    } catch {
      console.error('Something wrong');
    }
  };

  useEffect(() => {
    (async () => {
      await getIsIntroduction();
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {isIntroduction ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Intro" component={IntroScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            title: '',
            headerTransparent: true,
            headerTintColor: Colors.light,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="Bill" component={BillScreen} />
            <Stack.Screen name="Percentage" component={PercentageScreen} />
            <Stack.Screen name="People" component={PeopleScreen} />
          </Stack.Group>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
