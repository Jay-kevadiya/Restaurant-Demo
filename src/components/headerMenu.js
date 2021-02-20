import React from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import { P } from './typography';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export default HeaderMenu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable style={{ ...styles.button, ...styles.backButton }} onPress={() => navigation.goBack()}>
                <Icon name="chevron-back-outline" size={20} color="black" />
            </Pressable>

            <View style={styles.extraContainer}>
                <P style={styles.extraText}>20+ Friends were here</P>

                <View style={styles.extraImagesContainer}>
                    <Image
                        style={styles.extraImage}
                        source={{ uri: "https://randomuser.me/api/portraits/women/92.jpg" }}
                    />

                    <Image
                        style={styles.extraImage}
                        source={{ uri: "https://randomuser.me/api/portraits/women/10.jpg" }}
                    />
                </View>
                <Pressable style={styles.extraButton}>
                    <P>+18</P>
                </Pressable>
            </View>
            <Pressable style={{ ...styles.button, ...styles.shareButton }}>
                <Icon name="share-outline" size={20} color="#ffffff" />
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 40,
        width: "100%",
        paddingHorizontal: 24,
        zIndex: 2
    },
    button: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 70
    },
    backButton: {
        backgroundColor: "#ffffff",
        borderColor: "#eee",
        borderWidth: 2
    },
    shareButton: {
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    extraContainer: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 6,
        borderRadius: 60,
        //paddingHorizontal:-15
    },
    extraButton: {
        backgroundColor: "#ffffff",
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    extraText: {
        marginHorizontal: 6,
        color: "#ffffff",
        textTransform: "capitalize"
    },
    extraImagesContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    extraImage: {
        height: 28,
        width: 28,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#ffffff",
        marginHorizontal: -2

    }

});