import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const logo = { uri: "https://cdn-rdb.arla.com/Files/arla-se/2343447576/80fd8a7e-7ef3-46e4-be54-a868dbc25e7b.jpg" };


function ViewImageScreenImage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35}></MaterialCommunityIcons>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}></MaterialCommunityIcons>
            </View>
            <Image resizeMode="contain" style={styles.image}source={logo}/>
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 30,
        left: 30
         
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
         
    },
    container: {
        backgroundColor: colors.black,
        flex: 1 
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
export default ViewImageScreenImage;