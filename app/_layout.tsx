import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View, Text } from "react-native";

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

  return (
  <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
    <Stack />
  </View>
);
}
