import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


const Dashboard: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* User Greeting */}
        <View style={styles.userGreeting}>
          <Image
            source={require("@/assets/images/doc.png")}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.greetingText}>Hi, Welcome Back,</Text>
            <Text style={styles.userName}>John Doe William</Text>
          </View>
        </View>
        <View style={styles.containerDes}>
          {/* Text Section */}
          <View style={styles.textContainerDes}>
            <Text style={styles.titleDes}>Medical Center</Text>
            <Text style={styles.descriptionDes}>
              Eyes are essential to how we experience the world. Proper eye care
              is the foundation for preserving sight and ensuring a lifetime of
              clarity and vision.
            </Text>
          </View>

          <View>
            <Image
              source={require("@/assets/images/doc-f.png")}
              style={styles.imageDes}
            />
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Top Doctors Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Doctors</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          <View style={styles.cardTop}>
            {/* Header Section */}
            <View style={styles.headerTop}>
              <Image
                source={require("@/assets/images/doc.png")}
                style={styles.profileImage}
              />
              <View style={styles.headerTextTop}>
                <Text style={styles.nameTop}>Dr. Abram George</Text>
                <Text style={styles.specialtyTop}>General Physician</Text>
              </View>
              <View style={styles.ratingContainerTop}>
                <Text style={styles.heartIconTop}>❤️</Text>
                <Text style={styles.ratingTop}>4.9</Text>
              </View>
            </View>

            {/* Appointment Details */}
            <View style={styles.appointmentDetailsTop}>
              <View style={styles.rowTop}>
                <Text style={styles.iconTop}>🕒</Text>
                <Text style={styles.dateTop}>Monday</Text>
                <Text style={styles.dateTop}>Oct 27, 2022</Text>
                <Text style={styles.timeTop}>9:00 - 9:30 am</Text>
              </View>
            </View>

            {/* Book Appointment Button */}
            <TouchableOpacity style={styles.buttonTop}>
              <Text style={styles.buttonTextTop}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
          {/* Add more doctor cards as needed */}
        </ScrollView>

        {/* Health Articles Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Health Articles</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          <View style={styles.cardArt}>
            <View style={styles.headerArt}>
              <Text style={styles.dateArt}>02 July 2022</Text>
              <TouchableOpacity>
                <Image
                  source={require("@/assets/images/eye.png")}
                  style={styles.bookmarkIconArt}
                />
              </TouchableOpacity>
            </View>

            {/* Title and Description */}
            <Text style={styles.titleArt}>COVID-19 Vaccine</Text>
            <Text style={styles.descriptionArt}>Official public service</Text>

            {/* Arrow Icon */}
            <TouchableOpacity style={styles.arrowButtonArt}>
              <Image
                source={require("@/assets/images/back-button.png")}
                style={styles.arrowIconArt}
              />
            </TouchableOpacity>
          </View>
          {/* Add more article cards as needed */}
        </ScrollView>
      </View>

      <View style={styles.appContainer}>
        <Text style={styles.title}>
          Book Appointments in <Text style={styles.bold}>3 easy steps</Text>
        </Text>

        {/* Step 1 */}
        <View style={styles.step}>
          <View style={styles.iconContainer}>
            <Image
              source={require("@/assets/images/eye.png")}
              style={styles.appIcon}
            />
          </View>
          <Text style={styles.stepText}>
            Search for doctors by <Text style={styles.bold}>speciality</Text>,{" "}
            <Text style={styles.bold}>service</Text> or{" "}
            <Text style={styles.bold}>disease</Text>
          </Text>
        </View>

        {/* Step 2 */}
        <View style={styles.step}>
          <View style={styles.iconContainer}>
            <Image
              source={require("@/assets/images/eye.png")}
              style={styles.appIcon}
            />
          </View>
          <Text style={styles.stepText}>
            Book and <Text style={styles.bold}>confirmed appointment</Text>{" "}
            within seconds
          </Text>
        </View>

        {/* Step 3 */}
        <View style={styles.step}>
          <View style={styles.iconContainer}>
            <Image
              source={require("@/assets/images/eye.png")}
              style={styles.appIcon}
            />
          </View>
          <Text style={styles.stepText}>
            Select based on <Text style={styles.bold}>experience</Text>,{" "}
            <Text style={styles.bold}>fee</Text> or{" "}
            <Text style={styles.bold}>rating</Text>
          </Text>
        </View>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton}>
          <Image
            style={styles.navIcon}
            source={require("@/assets/images/eye.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            style={styles.navIcon}
            source={require("@/assets/images/eye.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image
            style={styles.navIcon}
            source={require("@/assets/images/eye.png")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#240046",
  },
  header: {
    padding: 16,
  },
  userGreeting: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 24,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  greetingText: {
    color: "#B1A5A5",
    fontSize: 16,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  //Description
  containerDes: {
    flexDirection: "row",
    backgroundColor: "#C4521A",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  textContainerDes: {
    flex: 1,
    marginRight: 28,
  },
  titleDes: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  descriptionDes: {
    fontSize: 12,
    color: "#FFFFFF",
    lineHeight: 20,
  },
  imageDes: {
    width: 140,
    height: 140,
    borderRadius: 8,
    marginLeft: -45,
  },
  mainContent: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  seeAll: {
    color: "#6200EE",
    fontSize: 14,
  },
  horizontalScroll: {
    marginBottom: 16,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
  },
  navButton: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  //Appointment
  appContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    color: "#333333",
    marginBottom: 16,
  },
  bold: {
    fontWeight: "700",
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#FF6A00",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  appIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
  },
  stepText: {
    fontSize: 14,
    color: "#333333",
    flex: 1,
  },
  //Article
  cardArt: {
    backgroundColor: "#FF6A00",
    borderRadius: 12,
    padding: 16,
    width: 360,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  headerArt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateArt: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  bookmarkIconArt: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
  },
  titleArt: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 8,
  },
  descriptionArt: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 4,
    lineHeight: 20,
  },
  arrowButtonArt: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#FFA726",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowIconArt: {
    width: 16,
    height: 16,
    tintColor: "#FFFFFF",
  },
  //TopDoctors
  cardTop: {
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
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profileImageTop: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  headerTextTop: {
    flex: 1,
  },
  nameTop: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  specialtyTop: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  ratingContainerTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartIconTop: {
    fontSize: 16,
    color: "red",
    marginRight: 4,
  },
  ratingTop: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  appointmentDetailsTop: {
    backgroundColor: "#E9F4FF",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  rowTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTop: {
    fontSize: 16,
    marginRight: 8,
  },
  dateTop: {
    fontSize: 14,
    color: "#333",
    marginRight: 12,
  },
  timeTop: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },
  buttonTop: {
    backgroundColor: "#FF6C00",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonTextTop: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
