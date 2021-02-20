import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { H1, P } from './typography';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from './Avatar';

export default TopNavigation = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.leftNav}>
                    <H1>Hello, Jay</H1>
                    <TouchableOpacity activeOpacity={0.5} style={styles.locationContainer}>
                            <P style={styles.locationText}>Surat, Gujarat</P>
                            <Icon name="chevron-down" size={20} color="#6f9e76"/>
                    </TouchableOpacity>
            </View>

             <Avatar imageURl='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' isOnline/>
             
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 20,
        paddingTop: 42,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftNav: {
        flex:1
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationText: {
        color: '#a2a2a2',
        marginEnd: 8
    }
});