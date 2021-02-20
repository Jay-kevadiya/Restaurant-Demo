import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { P } from './typography';

export default TrendingListItem = ({ name, distance, image }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={image} />
            <P style={styles.name}>{name}</P>

            <View style={styles.distanceContainer}>
                <P style={styles.distanceText}>{distance}</P>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderColor: "#eee",
        width: 100,
        padding: 8,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 50,
        width: 50
    },
    name: {
        fontSize: 12,
        fontFamily: 'FiraSansBold',
        marginVertical: 4
    },
    distanceContainer: {
        paddingHorizontal: 8,
        backgroundColor: '#eeeeee',
        paddingVertical: 5,
        borderRadius: 5
    },
    distanceText: {
        fontSize: 10,
        fontFamily: 'FiraSansMedium'
    }
});