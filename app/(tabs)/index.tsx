import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "@/pages/OnboardingScreen";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import PassRecover from "@/pages/PassRecover";
import OTP from "@/pages/OTP";
import ChangePassword from "@/pages/ChangePassword";
import Dashboard from "@/pages/Dashboard";
import TestNormal from "@/pages/TestNormal";
import TestMinor from "@/pages/TestMinor";
import TestMajor from "@/pages/TestMajor";
import TestStart from "@/pages/TestStart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TestNormal" component={TestNormal} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="TestMajor" component={TestMajor} />
      <Stack.Screen name="TestMinor" component={TestMinor} />
      <Stack.Screen name="TestStart" component={TestStart} />
    </Stack.Navigator>
  );
}
