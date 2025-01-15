import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// Define the props type for the DoctorCard component
type DoctorCardProps = {
  name: string;
  specialty: string;
  rating: number;
  date: string;
  time: string;
  onPress: () => void;
};

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  rating,
  date,
  time,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/doc.png")}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.specialty}>{specialty}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.heartIcon}>❤️</Text>
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>

      {/* Appointment Details */}
      <View style={styles.appointmentDetails}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      {/* Book Appointment Button */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  specialty: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartIcon: {
    fontSize: 16,
    color: "red",
    marginRight: 4,
  },
  rating: {
    fontSize: 14,
    color: "#333",
  },
  appointmentDetails: {
    marginBottom: 16,
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  time: {
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#6200EE",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
