import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PlaceDetail from '../screens/PlaceDetail';

const Stack = createStackNavigator();

export default NavigatorList = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none" >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};