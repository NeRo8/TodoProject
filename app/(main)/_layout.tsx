import { useEffect } from "react";

import { Redirect, Tabs } from "expo-router";

import { useAuthContext } from "@/providers/AuthProvider";

const LOGOUT_TIMER_VALUE = 1000 * 60 * 5;

export default function MainLayout() {
  const { isAuthComplete, onChangeAuthStatus } = useAuthContext();

  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      onChangeAuthStatus(false);
    }, LOGOUT_TIMER_VALUE);

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [isAuthComplete, onChangeAuthStatus]);

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
