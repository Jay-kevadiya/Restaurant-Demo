import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { H2, P } from './typography';
import Rating from './Rating';

export default PlaceInfo = () => {
    return(
        <View style={styles.titleContainer}>
            <H2>Eddy's Pizza - Dansoman</H2>    

            <View style={styles.tagsContainer}>
                <View style={styles.tag}>
                    <P style={styles.tahText}>Pizza</P>
                </View>
                <View style={styles.tag}>
                    <P style={styles.tahText}>Meat</P>
                </View>
                <View style={styles.tag}>
                    <P style={styles.tahText}>Local</P>
                </View>
            </View>
            <View style={styles.ratingContainer}>
                <Rating rating={4.2} />
                <P style={styles.ratingText}>(200+ reviews)</P>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    titleContainer:{
        padding: 24,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        backgroundColor: '#ffffff',
        marginTop: -30,
        borderBottomWidth: 6,
        borderBottomColor:'#eeeeee'
    },
    tagsContainer:{
        flexDirection:"row",
        marginVertical: 8
    },
    tag:{
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginEnd:8,
        backgroundColor:'#d9d9d9',
        borderRadius: 6,
        alignItems:'center',
        justifyContent:'center'
    },
    tahText:{
        fontFamily:'FiraSansMedium',
        fontSize: 15
    },
    ratingContainer:{
        flexDirection: "row",
        alignItems: 'flex-end'
    },
    ratingText:{
        fontSize: 12,
        marginStart: 12,
        color: '#8f8f8f'
    }
});