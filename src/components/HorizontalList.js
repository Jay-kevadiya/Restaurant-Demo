import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';

export default HorizontalList = ({ keyExtractor, data, renderItem, style}) => {
    return(
        <View style={{...styles.container, ...style}}>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={keyExtractor}
                data={data}
                renderItem ={renderItem}
                ItemSeparatorComponent={ItemSeparator}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
};

const ItemSeparator = () => <View style={styles.itemSeparator}/>
const HeaderFooter = () => <View style={styles.headerFooter}/>

const styles = StyleSheet.create({

    container: {
        marginVertical: 10,
    },
    itemSeparator: {
        width: 12
    },
    contentContainer: {
        paddingHorizontal: 24
    }
    
});