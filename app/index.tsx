import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, Href } from "expo-router";   
import mahasiswa from "./data/mahasiswa";

export default function HomeScreen() {
  return (
    <FlatList
      data={mahasiswa}
      keyExtractor={(item) => item.nim}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            router.push(`/mahasiswa/${item.nim}` as Href)   
          }
        >
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.text}>{item.nama}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },
  text: { marginLeft: 10, fontSize: 16 },
});
