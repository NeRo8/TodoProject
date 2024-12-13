import { useEffect } from "react";

import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useRouter } from "expo-router";

import { AppIcon } from "@/assets/icons/AppIcon";

import { useAppContext } from "@/providers/AppProvider";
import { useAuthContext } from "@/providers/AuthProvider";

export default function SplashScreen() {
  const { styles } = useStyles(stylesheet);

  const { isOnboardingComplete } = useAppContext();
  const { isAuthComplete } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    const redirect = () => {
      if (isOnboardingComplete && isAuthComplete) {
        router.replace("/(main)");
      } else if (!isAuthComplete) {
        router.replace("/auth");
      } else {
        router.replace("/onboarding");
      }
    };

    const splashTimeout = setTimeout(() => redirect(), 2000);

    return () => clearTimeout(splashTimeout);
  }, [isOnboardingComplete, isAuthComplete, router]);

  return (
    <View style={styles.container}>
      <AppIcon />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary500,
  },
  text: {
    color: "red",
  },
}));
