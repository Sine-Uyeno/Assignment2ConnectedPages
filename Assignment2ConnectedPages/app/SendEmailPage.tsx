import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ComposeEmailPage() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    console.log("Email sent:", { to, subject, body });
    alert("Email sent successfully!");
    setTo("");
    setSubject("");
    setBody("");
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Compose</Text>

        <TouchableOpacity onPress={handleSend}>
          <MaterialIcons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Email Form */}
      <View style={styles.form}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>To:</Text>
          <TextInput
            style={styles.input}
            placeholder="Recipient's email"
            value={to}
            onChangeText={setTo}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Subject:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email subject"
            value={subject}
            onChangeText={setSubject}
          />
        </View>

        <TextInput
          style={styles.bodyInput}
          placeholder="Compose your email..."
          multiline
          textAlignVertical="top"
          value={body}
          onChangeText={setBody}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: 56,
    backgroundColor: "#D93025",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },

  form: { padding: 16 },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
  },

  label: { width: 70, fontWeight: "600", color: "#333" },

  input: { flex: 1, fontSize: 16, paddingVertical: 6, color: "#111" },

  bodyInput: {
    flex: 1,
    fontSize: 16,
    marginTop: 16,
    lineHeight: 22,
    color: "#111",
    height: 300,
    textAlignVertical: "top",
  },
});
