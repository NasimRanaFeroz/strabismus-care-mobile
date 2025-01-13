import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function StatusBar() {
  return (
    <View style={styles.statusBar}>
      <View style={styles.leftSection}>
        <Text style={styles.time}>4:20</Text>
      </View>
      <View style={styles.rightSection}>
        <Image
          source={require("@/assets/masters-status-bar-parts-atoms-indicator-signal0.svg")}
          style={styles.icon}
        />
        <Image
          source={require("@/assets/masters-status-bar-parts-atoms-indicator-wifi0.svg")}
          style={styles.icon}
        />
        <Image source={require("@/assets/levels0.svg")} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 44,
    backgroundColor: "#ffffff",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
});
