import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { P } from './typography';

export default Rating = ({ rating, maxRate }) => {

    const [stars, setStars] = useState([]);

    useEffect(() => {

        const mStars = [];
        for (let startNum = 1; startNum <= maxRate; startNum++) {

            const star = (
                <Icon 
                    key={startNum}
                    name="star" 
                    size={10} 
                    color={startNum <= rating ? 'gold' : '#d9d9d9'} 
                />
            )
            mStars.push(star);
        }
        setStars(mStars);

    }, [rating, maxRate]);

    return (
        <View style={styles.container}>
            {stars}
            <P style={styles.ratingText}>({rating})</P>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        fontSize: 12,
        marginStart: 5
    }
});

Rating.defaultProps = {
    maxRate: 5
}