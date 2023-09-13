import React from 'react';
import {View, Text} from 'react-native';
import RootNavigator from './screenNavigators/rootNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
