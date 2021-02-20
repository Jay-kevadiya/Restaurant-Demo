import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import PlaceMenu from './placeMenu';
import PlaceMenuTab from './tabs/placeMenuTab';
import PlaceDirectionTab from './tabs/placeDirectionTab';
import PlaceReviewTab from './tabs/placeReviewTab';

const { width } = Dimensions.get("window");
const components = [
    <PlaceMenuTab/>,
    <PlaceDirectionTab/>,
    <PlaceReviewTab/>
];

const renderItem = ({ item }) => item;


export default PlacePaging = () => {

    const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

    const onMenuItemPress = (index) => {
        setCurrentMenuIndex(index);
        flatlistRef.current.scrollToIndex({ index });
    }

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        const viewableItem = viewableItems[0];
        if (viewableItem) {
            const { index } = viewableItems[0];
            setCurrentMenuIndex(index);
        }

    })

    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50
    })

    const flatlistRef = useRef(null);

    return (
        <View>
            <PlaceMenu
                onMenuItemPress={onMenuItemPress}
                currentIndex={currentMenuIndex}

            />
            <FlatList
                ref={flatlistRef}
                data={components}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                pagingEnabled={true}
                removeClippedSubviews={true}
                bounces={false}
                maxToRenderPerBatch={1}
                initialNumToRender={1}
                windowSize={1}
                snapToInterval={width}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig.current}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
            />

        </View>
    )
};