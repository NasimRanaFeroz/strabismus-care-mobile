import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Image
          source={require("@/assets/images/logo-hz.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.welcomeText}>Welcome</Text>

      <View style={styles.form}>
        <View style={styles.inputField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputField}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Image
                style={styles.passwordToggle}
                source={
                  isPasswordVisible
                    ? require("@/assets/images/eye.png")
                    : require("@/assets/images/eye.png")
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.createAccountText}>
          Don&apos;t have an account?{" "}
          <Text style={styles.createAccountLink}>Create Account</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
              <Text style={styles.orText}>Or Sign in with</Text>
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
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 16,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    marginTop: 32,
    marginBottom: 32,
  },
  logo: {
    width: 230,
    height: 33,
    marginLeft: 8,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "#333",
  },
  form: {
    marginBottom: 24,
  },
  inputField: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  passwordContainer: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  inputPassword: {
    flex: 1,
    height: 48,
    fontSize: 16,
},
  
  passwordToggle: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 14,
    color: '#ff6d00',
  },
  signInButton: {
    backgroundColor: '#ff6d00',
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountText: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 16,
  },
  createAccountLink: {
    color: '#ff6d00',
    fontWeight: "bold",
    
  },
  socialContainer: {
    alignItems: 'center',
  },
  socialLogin: {
    alignItems: "center",
    marginTop: 24,
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

export default Login;
