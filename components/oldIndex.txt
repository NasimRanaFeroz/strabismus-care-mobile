import React from "react";
import { NativeRouter, Routes, Route, useNavigate } from "react-router-native"; // Use `useNavigate` from React Router Native
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Dashboard from "@/app/(tabs)/Dashboard";
import Login from "./(auth)/Login";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/(tabs)/Dashboard" element={<Dashboard />} />
        <Route path="/(auth)/Login" element={<Login/>} />
      </Routes>
    </NativeRouter>
  );
}

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.groupImage}
      />

      <Image
        source={require("@/assets/images/ball-up.png")}
        style={styles.ellipse17}
      />

      <Image
        source={require("@/assets/images/ball-down.png")}
        style={styles.ellipse20}
      />

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => navigate("/(auth)/Login")}
      >
        <Text style={styles.mainButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  groupImage: {
    opacity: 1,
    height: 150,
    width: 150,
    position: "absolute",
    left: 120,
    top: 325,
  },
  ellipse17: {
    width: 234,
    height: 234,
    position: "absolute",
    left: -53,
    top: 648,
  },
  ellipse20: {
    width: 234,
    height: 234,
    position: "absolute",
    left: 210,
    top: -38,
  },
  mainButton: {
    backgroundColor: "#FF6F00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: "90%",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  mainButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
