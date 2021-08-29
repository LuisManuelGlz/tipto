import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import {
  createSharedElementStackNavigator,
  SharedElementCompatRoute,
} from 'react-navigation-shared-element';
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
  Bill: {
    id: string | number;
    photoSource: string;
  };
  Percentage: {
    id: string | number;
    photoSource: string;
  };
  People: {
    id: string | number;
    photoSource: string;
  };
};

const Stack = createSharedElementStackNavigator<AppStackParamList>();

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

  /**
   * Get array of shared elements
   * @param route Screen route
   * @returns Shared elements
   */
  const sharedElementRoute = (route: SharedElementCompatRoute) => {
    const { id } = route.params;
    return [`item.${id}.photo`];
  };

  useEffect(() => {
    (async () => {
      // Get introduction state
      await getIsIntroduction();
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* If is the first time the app is open */}
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
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Bill"
            component={BillScreen}
            sharedElements={sharedElementRoute}
          />
          <Stack.Screen
            name="Percentage"
            component={PercentageScreen}
            sharedElements={sharedElementRoute}
          />
          <Stack.Screen
            name="People"
            component={PeopleScreen}
            sharedElements={sharedElementRoute}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
