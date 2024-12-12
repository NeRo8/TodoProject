import { Redirect, Stack } from "expo-router";

import { useAuthContext } from "@/providers/AuthProvider";

export default function AuthLayout() {
  const { isAuthComplete } = useAuthContext();

  if (isAuthComplete) {
    return <Redirect href="/(main)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
}
