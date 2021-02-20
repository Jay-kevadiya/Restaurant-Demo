import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { P } from '../components/typography';
import FullScreen from '../components/FullScreen';
import PlaceDetailHeader from '../components/placeDetailHeader';
import PlaceInfo from '../components/placeInfo';
import PlacePaging from '../components/placePaging';

export default PlaceDetail = () => {
    return(
        <FullScreen>
                <ScrollView 
                    showsVerticalScrollIndicator={false} 
                    contentInsetAdjustmentBehavior="automatic"
                >
                <PlaceDetailHeader/>

                <PlaceInfo />

                <PlacePaging/>

                </ScrollView>
        </FullScreen>
    )
};