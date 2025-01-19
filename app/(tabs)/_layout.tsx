import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="DashBoard" />
      </Tabs>
    </>
  );
};

export default TabsLayout;
