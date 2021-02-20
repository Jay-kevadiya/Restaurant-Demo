import React from 'react';
import { View, StyleSheet } from 'react-native';
import { images } from '../commons/models';
import Carousel from './carousel';
import HeaderMenu from './headerMenu';


export default PlaceDetailHeader = () => {
    return (
        <View style={styles.container}>
            <HeaderMenu />

            <Carousel images={images} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        //height: 300,
        backgroundColor: '#eee',
        position: 'relative'
    }
});