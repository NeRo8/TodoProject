import { useAppContext } from "@/providers/AppProvider";
import { useAuthContext } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

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
