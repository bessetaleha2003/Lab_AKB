import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#438ee3ff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="about"
        options={{
          title: "Tentang Saya",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="infocirlceo" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="idcard" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
