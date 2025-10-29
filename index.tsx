import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>This is your Home Page</Text>

      {/* Button-style link */}
      <Link href="/emaildetailspage" style={styles.linkButton}>
        Go to My Gmail Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  linkButton: {
    backgroundColor: "#D93025",
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontWeight: "600",
  },
});
