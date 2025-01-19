import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeRouter, Route, Routes, Link } from "react-router-native";

// Import your screens
import Dashboard from "./(tabs)/Dashboard";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Home />} />
          <Route path="/(tabs)/Dashboard" element={<Dashboard />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

// Home Component for the "/" route
function Home() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Link to="/(tabs)/Dashboard" style={styles.link}>
        <Text style={styles.linkText}>Go to Dashboard</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FF6F00",
    borderRadius: 5,
  },
  linkText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
