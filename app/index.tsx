import { Text, View } from "react-native";

export default function Index() {
  return (
   <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20, 
      }}
    >
      <View
        style={{
          backgroundColor: "green",
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Besse Taleha
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "blue",
          paddingVertical: 6,
          paddingHorizontal: 20,
          borderRadius: 50,
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>105841109222</Text>
      </View>

      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          borderBottomWidth: 50,
          borderStyle: "solid",
          backgroundColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
        }}
      />
    </View>
  );
}