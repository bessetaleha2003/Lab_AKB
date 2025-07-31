import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View, Text } from "react-native";
import {TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // FONT STATIS
    'Bitter-Thin': require("../assets/fonts/Bitter-Thin.ttf"),
    'FiraSans-Regular': require("../assets/fonts/FiraSans-Regular.ttf"),
    'Merriweather-BoldItalic': require("../assets/fonts/Merriweather_BoldItalic.ttf"),
    'Nunito-SemiBold': require("../assets/fonts/Nunito-SemiBold.ttf"),
    'WorkSans-Medium': require("../assets/fonts/WorkSans-Medium.ttf"),

    // FONT VARIABEL
    'Recursive-Variable': require("../assets/fonts/Recursive-Variable.ttf"),
    'Archivo-Variable': require("../assets/fonts/Archivo-Variable.ttf"),
    'Mulish-Variable': require("../assets/fonts/Mulish-Variable.ttf"),
    'NotoSans-Variable': require("../assets/fonts/NotoSans-Variable.ttf"),
    'IBMPlexSans-Variable': require("../assets/fonts/IBMPlexSans-Variable.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  if (fontError) {
    console.error("Font error:", fontError);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Terjadi kesalahan saat memuat font.</Text>
      </View>
    );
  }

  // return (
  //   <Stack
  //     screenOptions={{
  //       header: ({ navigation }) => (
  //         <View style={{
  //             height: 60,
  //             backgroundColor: "#f8f8f8",
  //             justifyContent: "center",
  //             alignItems: "flex-start",
  //             paddingHorizontal: 10,
  //           }}>
            
  //           <TouchableOpacity style={{
  //               width: 60,
  //               marginLeft: 10,
  //             }}>
  //             <AntDesign name="home" size={24} color="black" />
  //           </TouchableOpacity>
  //         </View>
  //       ),
  //     }} />
  // );
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: "Ikon",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f8f8f8",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontFamily: "Nunito-SemiBold",
            fontSize: 20,
          },
        }}
      />
    </Stack>
  );
}