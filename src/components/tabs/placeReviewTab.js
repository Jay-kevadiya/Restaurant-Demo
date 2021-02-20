import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { P } from '../typography';

const { width } = Dimensions.get("window");

export default PlaceReviewTab = () => {
    return(
        <View style={{ width, padding:24}}> 
            <P>Review Tab</P>
        </View>
    )
};