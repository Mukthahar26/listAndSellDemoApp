//import liraries
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
import Details from '../screens/details';
import {screenNames} from '../constants/enums';
import AppText from '../components/appText';

export type RootStackParamList = {
  [screenNames.HOME]: undefined;
  [screenNames.DETAILS]: {
    countryName: string;
    flagImage: string;
    official: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screenNames.HOME} component={Home} />
      <Stack.Screen name={screenNames.DETAILS} component={Details} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
