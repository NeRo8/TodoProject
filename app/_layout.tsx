import { Slot } from "expo-router";

import { AppProvider } from "@/providers/AppProvider";
import { AuthProvider } from "@/providers/AuthProvider";

export default function RootLayout() {
  return (
    <AppProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </AppProvider>
  );
}
