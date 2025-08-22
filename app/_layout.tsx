import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Daftar Mahasiswa" }} />
        <Stack.Screen
          name="mahasiswa/[nim]"
          options={{ title: "Detail Mahasiswa" }}
        />
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
