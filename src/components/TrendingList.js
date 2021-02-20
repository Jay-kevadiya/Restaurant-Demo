import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionHeader from './SectionHeader';
import HorizontalList from './HorizontalList';
import { trendingBrands } from '../commons/models';
import TrendingListItem from './TrendingListItem';

export default TrendingList = () => {
 const renderItem = ({ item }) => <TrendingListItem {...item}/>

    return(
        <View style={styles.container}>
            <SectionHeader title="Trending brands" />
            <HorizontalList
                keyExtractor={(item) => item.id}
                data={trendingBrands}
                renderItem={renderItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 24
    }
});