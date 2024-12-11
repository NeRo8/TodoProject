import { useAppContext } from "@/providers/AppProvider";
import { useAuthContext } from "@/providers/AuthProvider";
import { Redirect, Tabs } from "expo-router";
import { useEffect } from "react";

const LOGOUT_TIMER_VALUE = 1000 * 60 * 5;

export default function MainLayout() {
  const { isOnboardingComplete } = useAppContext();
  const { isAuthComplete, onChangeAuthStatus } = useAuthContext();

  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      onChangeAuthStatus(false);
    }, LOGOUT_TIMER_VALUE);

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [isAuthComplete]);

  if (!isOnboardingComplete) {
    return <Redirect href="/onboarding" />;
  }

  if (!isAuthComplete) {
    return <Redirect href="/auth" />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="create-record" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
