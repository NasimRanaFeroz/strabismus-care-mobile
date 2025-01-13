import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.time}>4:20</Text>
        <View style={styles.indicators}>
          <Image style={styles.icon} source={require('./assets/masters-status-bar-parts-atoms-indicator-signal0.svg')} />
          <Image style={styles.icon} source={require('./assets/masters-status-bar-parts-atoms-indicator-wifi0.svg')} />
          <Image style={styles.icon} source={require('./assets/levels0.svg')} />
        </View>
      </View>

      {/* Header */}
      <Text style={styles.header}>Create a new account</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="Adam Costa" />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="adam.costa@email.com" keyboardType="email-address" />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="@xD$E!89ujkA" secureTextEntry={true} />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
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
            <Image style={styles.socialIcon} source={require('./assets/image-20.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={styles.socialIcon} source={require('./assets/logo-facebook0.svg')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image style={styles.socialIcon} source={require('./assets/apple0.svg')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.guestText}>Continue as guest</Text>
        </TouchableOpacity>
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
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
  },
  indicators: {
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 4,
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
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  guestText: {
    fontSize: 14,
    color: '#ff7900',
    fontWeight: '500',
  },
});

export default Login;
