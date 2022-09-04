import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://thumbs.dreamstime.com/b/supermarket-grocery-store-aisle-shows-large-selection-food-products-shopping-big-section-editorial-image-172503156.jpg" };
const logo = { uri: "https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" };



const WelcomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo}/>
            <Text>Matlista made enklare</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
 
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  }
});

export default WelcomeScreen;