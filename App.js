import React from 'react';
import { Text, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigatorList from './src/commons/NavigatorList';


const App = () => {
  return (
    <>
      <StatusBar hidden />
      <NavigatorList/>
    </>
  )
};



export default App;