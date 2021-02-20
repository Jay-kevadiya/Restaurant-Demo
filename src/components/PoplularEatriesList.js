import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizontalList from './HorizontalList';
import SectionHeader from './SectionHeader';
import { popularEatries } from '../commons/models';
import PopularPlaceItem from './PopularPlaceItem';

export default PopularEatriesList = () => {

       const renderItem =  ({ item }) => <PopularPlaceItem {...item} /> 

    return(
        <>
            <SectionHeader title="Popular Eatries"/>
            <HorizontalList 
                data={popularEatries}
                style={styles.listStyle}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </>
    )
};

const styles = StyleSheet.create({
    listStyle: {
        marginTop: 16
    }
});