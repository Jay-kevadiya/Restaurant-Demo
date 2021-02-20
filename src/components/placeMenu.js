import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { H5, P } from './typography';

const menuItems = ["menu", "directions", "reviews"];

export default PlaceMenu = ({ currentIndex, onMenuItemPress }) => {

    const menu = menuItems.map((item, index) => {
        const containerStyle = 
            index == currentIndex ?
            { ...styles.menuItem, ...styles.menuItemActive } : 
            styles.menuItem;

        const textStyle = 
            index == currentIndex ?
            {...styles.menuText, ...styles.menuTextActive} :
            styles.menuText;


        return <Pressable  onPress={() =>  onMenuItemPress(index)} 
        style={containerStyle} key={index}>
            <P style={textStyle}>{item}</P>
        </Pressable>
    })

    const scrollViewRef = useRef(null);

    const onItemPress = (index) => {
        onMenuItemPress(index)
        scrollViewRef.current.scrollToIndex({index});
    }

    return (

        <View style={styles.menuContainer}>
            <H5 style={styles.menuTitle}>Restaurant Info</H5>
            <ScrollView
                ref={scrollViewRef}
                horizontal={true}
                //pagingEnabled={true}
                showsHorizontalScrollIndicator={false}


            >
                {menu}

            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 2,
        paddingHorizontal: 24
    },
    menuTitle: {
        fontSize: 16,
        marginEnd: 24
    },
    menuItem:{
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    menuItemActive:{
        borderBottomWidth: 2,
        borderBottomColor:"#34807d"
    },
    menuText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#8f8f8f',
        fontFamily:'FiraSansMedium',
        textTransform:'capitalize'
    },
    menuTextActive:{
        color:'#34807d'
    }
});