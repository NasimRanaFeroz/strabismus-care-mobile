import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OnboardingScreenNavigationProp } from '@/navigation/types'; // Adjust the path as needed

export default function OnboardingScreen() {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  useEffect(() => {
    // Navigate to Login screen after 2 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Group 50 Image */}
      <Image source={require('@/assets/images/logo.png')} style={styles.groupImage} />

      {/* Ellipse 17 */}
      <Image source={require('@/assets/images/ball-up.png')} style={styles.ellipse17} />

      {/* Ellipse 20 */}
      <Image source={require('@/assets/images/ball-down.png')} style={styles.ellipse20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  groupImage: {
    opacity: 1,
    height: 150,
    width: 150,
    position: 'absolute',
    left: 120,
    top: 325,
  },
  ellipse17: {
    width: 234,
    height: 234,
    position: 'absolute',
    left: -53,
    top: 648,
  },
  ellipse20: {
    width: 234,
    height: 234,
    position: 'absolute',
    left: 210,
    top: -38,
  },
});
