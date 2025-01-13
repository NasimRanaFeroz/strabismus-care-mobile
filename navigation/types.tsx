// src/types/navigation.ts
import { StackNavigationProp } from '@react-navigation/stack';

// Define the route names and their parameters
export type RootStackParamList = {
  OnboardingScreen: undefined; // No parameters for this screen
  Login: undefined; // No parameters for this screen
};

// Define the navigation prop for the OnboardingScreen
export type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnboardingScreen'
>;
