import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { P } from '../typography';

const { width } = Dimensions.get("window");

export default PlaceDirectionTab = () => {
    return(
        <View style={{ width, padding:24}}> 
            <P>Direction Tab</P>
        </View>
    )
};