import React from 'react';
import { View, Text, StyleSheet, ScrollView  } from 'react-native';
import FullScreen from '../components/FullScreen';
import TopNavigation from '../components/TopNavigation';
import SearchBar from '../components/SearchBar';
import CategoryListItem from '../components/CategoryListItem';
import CategoryList from '../components/CategoryList';
import SectionHeader from '../components/SectionHeader';
import PopularPlaceItem from '../components/PopularPlaceItem';
import PoplularEatriesList from '../components/PoplularEatriesList';
import TrendingList from '../components/TrendingList';

export default Home = () => {

    return (
        <FullScreen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic">

                <TopNavigation />

                <SearchBar />

                <CategoryList />

                <PoplularEatriesList />

                <TrendingList />

            </ScrollView>
        </FullScreen>
    )
};