import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default Indicators = ({ currentIndex, carouselSize }) => {

    const [indicators, setIndicators] = useState([]);
    useEffect(() => {
        const mIndicators = [];
        for (index = 0; index < carouselSize; index++) {
            const style = currentIndex === index ?
                { ...styles.indicator, ...styles.indicatorActive } :
                styles.indicator;

            const indicator = <View key={index} style={style} />
            mIndicators.push(indicator);
        }
        setIndicators(mIndicators);
    }, [currentIndex, carouselSize]);
    return (
        <View style={styles.indicatorContainer} children={indicators} />

    )
};

const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 50,
        //backgroundColor: "black"
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 30,
        backgroundColor: "rgba(255,255,255,0.5)",
        marginHorizontal: 3
    },
    indicatorActive: {
        backgroundColor: "#ffffff",
        height: 12,
        width: 12
    }
});