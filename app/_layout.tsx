import { AppProvider } from "@/providers/AppProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <AppProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </AppProvider>
  );
}
