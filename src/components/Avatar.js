import React from 'react';
import { View , TouchableOpacity, Image, StyleSheet} from 'react-native';


export default Avatar = ({ isOnline, imageURl }) => {

    const indicatorStyle = isOnline ? { ...styles.onlineIndicator, ...styles.online } : styles.onlineIndicator;

    return(
        <View style={styles.container}>
               <TouchableOpacity activeOpacity={0.5}>
                    <Image style={styles.avtar} resizeMode="contain" source={{ uri: imageURl }}/>
                </TouchableOpacity>
                <View style={indicatorStyle}/>
        </View>
    )
};

const styles = StyleSheet.create({
    
    container: {
        width: 40,
        height: 40
    },
    avtar: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        position: 'relative'

    },
    onlineIndicator: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: '#a2a2a2',
        position:'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#ffffff',
        borderWidth: 3,

    },
    online:{
        backgroundColor: '#56b365'
    }
});