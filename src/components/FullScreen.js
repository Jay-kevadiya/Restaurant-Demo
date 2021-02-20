import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default FullScreen = (props) => {
    return(
        <SafeAreaView style={styles.fullScreen} {...props} />
    )
};

const styles = StyleSheet.create({
    fullScreen: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff'
    }
  });