import { useEffect } from "react";

import { OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto";

import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { AppProvider } from "@/providers/AppProvider";
import { AuthProvider } from "@/providers/AuthProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loadedFonts, errorLoadFonts] = useFonts({
    OpenSans_700Bold,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  useEffect(() => {
    if (loadedFonts || errorLoadFonts) {
      SplashScreen.hideAsync();
    }
  }, [loadedFonts, errorLoadFonts]);

  if (!loadedFonts && !errorLoadFonts) {
    return null;
  }

  return (
    <AppProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </AppProvider>
  );
}
