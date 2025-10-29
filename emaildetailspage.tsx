import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EmailDetailsPage() {
  const email = {
    fromName: "John Doe",
    fromEmail: "john.doe@gmail.com",
    date: "Oct 29",
    subject: "Meeting Tomorrow",
    body: `Hi there,

Just a reminder that we have a meeting tomorrow at 10 AM. Please bring the latest report.

Thanks,
John`,
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle} numberOfLines={1}>
          {email.subject}
        </Text>

        <View style={styles.headerIcons}>
          <Ionicons name="archive-outline" size={20} color="#fff" style={styles.iconBtn} />
          <MaterialIcons name="delete-outline" size={20} color="#fff" style={styles.iconBtn} />
          <Entypo name="dots-three-vertical" size={18} color="#fff" style={styles.iconBtn} />
        </View>
      </View>

      {/* Sender Info */}
      <View style={styles.senderRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarLetter}>{email.fromName[0]}</Text>
        </View>
        <View style={styles.senderText}>
          <Text style={styles.fromName}>{email.fromName}</Text>
          <Text style={styles.fromEmail}>{email.fromEmail}</Text>
        </View>
        <Text style={styles.dateText}>{email.date}</Text>
      </View>

      {/* Email Body */}
      <ScrollView style={styles.bodyScroll}>
        <Text style={styles.subject}>{email.subject}</Text>
        <View style={styles.divider} />
        <Text style={styles.bodyText}>{email.body}</Text>
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.actionBtn}>
          <MaterialIcons name="reply" size={20} color="#D93025" />
          <Text style={styles.actionText}>Reply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <MaterialIcons name="reply-all" size={20} color="#D93025" />
          <Text style={styles.actionText}>Reply all</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <MaterialIcons name="forward" size={20} color="#D93025" />
          <Text style={styles.actionText}>Forward</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 12,
  },
  headerTitle: { flex: 1, color: "#fff", fontSize: 16, marginLeft: 12, fontWeight: "600" },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  iconBtn: { marginLeft: 12 },
  senderRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e6e6e6",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#e53935",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarLetter: { color: "#fff", fontWeight: "700" },
  senderText: { flex: 1 },
  fromName: { fontSize: 16, fontWeight: "600" },
  fromEmail: { color: "#666", marginTop: 2 },
  dateText: { color: "#666", marginLeft: 8 },
  bodyScroll: { flex: 1, padding: 16 },
  subject: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  divider: { height: 1, backgroundColor: "#eee", marginVertical: 8 },
  bodyText: { fontSize: 16, lineHeight: 22, color: "#111" },
  bottomBar: {
    height: 72,
    borderTopWidth: 0.5,
    borderTopColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  actionBtn: { alignItems: "center" },
  actionText: { fontSize: 12, color: "#D93025", marginTop: 4 },
});
