import React from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "@/components/OnboardingScreen"; // Adjust path as needed
import Login from "@/components/Login"; // Adjust path as needed

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnboardingScreen">
          {/* Onboarding Screen */}
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }} // Hide header for onboarding
          />
          {/* Login Screen */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }} // Hide header for login
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
