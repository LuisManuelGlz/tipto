import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StartScreen from './src/screens/StartScreen';
import HomeScreen from './src/screens/HomeScreen';
import BillScreen from './src/screens/BillScreen';
import PercentageScreen from './src/screens/PercentageScreen';
import PeopleScreen from './src/screens/PeopleScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {false ? (
          <Stack.Navigator>
            <Stack.Screen name="Start" component={StartScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
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
    </SafeAreaProvider>
  );
};

export default App;
