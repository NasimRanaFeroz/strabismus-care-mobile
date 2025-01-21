import React from "react";
import { Tabs } from "expo-router/tabs";

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#161612",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 100,
          },
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
            headerShown: true,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;