import React from 'react';
import HorizontalList from './HorizontalList';
import { categories } from '../commons/models';
import CategoryListItem from './CategoryListItem';

export default CategoryList = () => {

    const renderItem = ({ item }) => (
        <CategoryListItem 
            caption={item.caption} 
            image={item.image} 
            title={item.title} 
            backgroundColor={item.backgroundColor} 
        />
    )

    return (
        <HorizontalList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
};