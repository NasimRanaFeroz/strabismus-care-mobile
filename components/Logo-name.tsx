import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const StrabismusCare = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        STRABISMUS
        <Text style={styles.careText}>CARE</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    alignItems: "center", 
  },
  logo: {
    width: 60, 
    height: 60, 
    marginRight: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A4A4A", 
  },
  careText: {
    color: "#B34700",
  },
});

export default StrabismusCare;
