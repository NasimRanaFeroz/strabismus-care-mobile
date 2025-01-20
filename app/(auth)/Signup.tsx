import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Signup = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      <View style={styles.topHeader}>
              <Image
                source={require("@/assets/images/logo-hz.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

      {/* Header */}
      <Text style={styles.header}>Create a new account</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="Enter your name" />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Enter a password" secureTextEntry={true} />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Signup */}
      <View style={styles.socialContainer}>
        <Text style={styles.orText}>Or Sign up with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={styles.socialIcon} source={require('@/assets/images/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={styles.socialIcon} source={require('@/assets/images/facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={styles.socialIcon} source={require('@/assets/images/apple.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  topHeader: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center vertically
    paddingHorizontal: 4,
    marginTop: 32,
    marginBottom: 24,
  },
  logo: {
    width: 230,
    height: 33,
    marginLeft: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    color: '#240046',
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputField: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#1c1b1f',
    marginBottom: 4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#79747e',
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 24,
  },
  createAccountButton: {
    backgroundColor: '#ff6d00',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  signInText: {
    fontSize: 14,
    color: '#525a66',
    textAlign: 'center',
  },
  signInLink: {
    color: '#ff7900',
    fontWeight: '500',
  },
  socialContainer: {
    alignItems: 'center',
  },
  orText: {
    fontSize: 14,
    color: '#525a66',
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  socialButton: {
    width: 114,
    height: 56,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});

export default Signup;
