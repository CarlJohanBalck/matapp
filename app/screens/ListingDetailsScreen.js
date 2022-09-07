import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';


const image = { uri: "https://thumbs.dreamstime.com/b/supermarket-grocery-store-aisle-shows-large-selection-food-products-shopping-big-section-editorial-image-172503156.jpg" };
const logo = { uri: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" };


function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={image}></Image>
            <View style={styles.detailsContainer}>

            <AppText style={styles.title}>Recept exempel</AppText>
            <AppText style={styles.price}>67 kr</AppText>
            <View style={styles.userContainer}>

                <ListItem
                    image={logo}
                    title="Calle"
                    subTitle="5 Listings"
                />

            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20,

    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;