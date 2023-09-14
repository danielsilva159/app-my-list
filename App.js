import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
export default function App() {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}
