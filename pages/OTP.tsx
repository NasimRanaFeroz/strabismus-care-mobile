import React from "react";
import Logo from "@/components/Logo-name";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const OtpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            style={styles.backArrow}
            source={require("@/assets/images/back-button.png")}
          />
        </TouchableOpacity>
        <Image
          source={require("@/assets/images/logo-hz.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>OTP Authentication</Text>
        <Text style={styles.subtitle}>
          An authentication code has been sent to your email
        </Text>

        {/* OTP Input */}
        <View style={styles.otpWrapper}>
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>

        {/* Resend Code */}
        <TouchableOpacity>
          <Text style={styles.resendText}>
            Didn&apos;t receive the code?{" "}
            <Text style={styles.resendLink}>Resend</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  logo: {
    width: 230,
    height: 33,
    marginLeft: 8,
  },
  header: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center vertically
    paddingHorizontal: 16,
    marginTop: 32,
  },
  backButton: {
    width: 32,
    height: 32,
    backgroundColor: "#fff5e5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8, // Space between back button and logo
  },
  backArrow: {
    width: 32,
    height: 32,
  },
  mainContent: {
    marginTop: 64,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#240046",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#525a66",
    textAlign: "center",
    marginBottom: 24,
  },
  otpWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 358,
    marginBottom: 16,
  },
  otpInput: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: "#79747e",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 16,
    color: "#1c1b1f",
  },
  resendText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#525a66",
    textAlign: "center",
  },
  resendLink: {
    color: "#ff6d00",
  },
  continueButton: {
    width: "100%",
    maxWidth: 358,
    paddingVertical: 12,
    backgroundColor: "#ff6d00",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 32,
    alignSelf: "center",
  },
  continueButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default OtpScreen;
