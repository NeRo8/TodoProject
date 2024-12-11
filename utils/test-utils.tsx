import { AppProvider } from "@/providers/AppProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { render, RenderOptions } from "@testing-library/react-native";
import { ReactElement } from "react";

export const renderWithProviders = (ui: ReactElement, options?: RenderOptions) => {
  return render(
    <AppProvider>
      <AuthProvider>{ui}</AuthProvider>
    </AppProvider>,
    options,
  );
};
