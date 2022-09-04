import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const logo = { uri: "https://cdn-rdb.arla.com/Files/arla-se/2343447576/80fd8a7e-7ef3-46e4-be54-a868dbc25e7b.jpg" };


function ViewImageScreenImage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.image}source={logo}/>
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: 30,
        left: 30
         
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 40,
        right: 30
         
    },
    container: {
        backgroundColor: "#000",
        flex: 1 
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
export default ViewImageScreenImage;