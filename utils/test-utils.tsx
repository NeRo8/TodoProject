import { PropsWithChildren, ReactElement } from "react";

import { render, RenderOptions, userEvent } from "@testing-library/react-native";

import { AppProvider } from "@/providers/AppProvider";
import { AuthProvider } from "@/providers/AuthProvider";

const createWrapper = () =>
  Object.assign(
    ({ children }: PropsWithChildren) => (
      <AppProvider>
        <AuthProvider>{children}</AuthProvider>
      </AppProvider>
    ),
    { dispayName: "Wrapper" },
  );

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) => {
  const Wrapper = createWrapper();

  return render(ui, {
    wrapper: Wrapper,
    ...options,
  });
};

export const setup = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  const Wrapper = createWrapper();
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from "@testing-library/react-native";
export { renderWithProviders as render };
