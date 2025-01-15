import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';

const DashboardNavbar = () => {
  return (
    <View style={styles.container}>
      {/* Dashboard Button */}
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcons name="dashboard" size={20} color="#FFFFFF" />
        <Text style={styles.text}>Dashboard</Text>
      </TouchableOpacity>

      {/* Middle Icon */}
      <TouchableOpacity>
        <FontAwesome name="stack-overflow" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Search Icon */}
      <TouchableOpacity>
        <Feather name="search" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Menu Icon */}
      <TouchableOpacity>
        <Feather name="menu" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardNavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2E004F',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4C1A85',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 6,
  },
});
