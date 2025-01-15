import React from 'react';
import { SafeAreaView } from 'react-native';
import OnboardingScreen from '@/pages/OnboardingScreen';
import Signup from '@/pages/Signup';
import Login from '@/pages/Login';
import PassRecover from '@/pages/PassRecover';
import OTP from '@/pages/OTP';
import ChangePassword from '@/pages/ChangePassword';
import Dashboard from '@/pages/Dashboard';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <OnboardingScreen /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <PassRecover /> */}
      {/* <OTP/> */}
      {/* <ChangePassword /> */}
      <Dashboard />
      {/* <DashboardNavbar /> */}
    </SafeAreaView>
  );
}
