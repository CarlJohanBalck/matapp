import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

const image = { uri: "https://thumbs.dreamstime.com/b/supermarket-grocery-store-aisle-shows-large-selection-food-products-shopping-big-section-editorial-image-172503156.jpg" };
const logo = { uri: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" };



const WelcomeScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image} blurRadius={5}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo}/>
          <Text style={styles.tagline}>Example text</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
        </View>
        
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
  
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%"

  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,


  }
});

export default WelcomeScreen;