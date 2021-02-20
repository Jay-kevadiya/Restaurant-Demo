import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { H4, P } from './typography';

export default SectionHeader = ({ title, linkText, onlinkPress }) => {
    return (
        <View style={styles.container}>
            <H4 style={styles.titleText}>{title}</H4>
            <TouchableOpacity onPress={onlinkPress} >
                <P style={styles.linkText}>{linkText || "View All"}</P>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    titleText: {
        textTransform: 'capitalize'
    },
    linkText: {
        color: '#34807d'
    }
});