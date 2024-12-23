import React, { PropsWithChildren } from "react";

import { useRouter as useRouterMock } from "expo-router";

import Onboarding from "@/app/onboarding";

import { useAppContext as useAppContextMock } from "@/providers/AppProvider";

import { render, setup, screen } from "@/utils/test-utils";

// Mock the necessary hooks
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/providers/AppProvider", () => ({
  useAppContext: jest.fn(),
  AppProvider: ({ children }: PropsWithChildren) => <>{children}</>,
}));

describe("Onboarding", () => {
  let mockOnChangeOnboardingStatus: jest.Mock;
  let mockReplace: jest.Mock;

  beforeEach(() => {
    mockOnChangeOnboardingStatus = jest.fn();
    mockReplace = jest.fn();
    (useAppContextMock as jest.Mock).mockReturnValue({
      onChangeOnboardingStatus: mockOnChangeOnboardingStatus,
    });
    (useRouterMock as jest.Mock).mockReturnValue({ replace: mockReplace });
  });

  it.skip("renders correctly", async () => {
    render(<Onboarding />);

    expect(screen.getByText("Onboarding page")).toBeTruthy();
  });

  it.skip('redirects to "/auth" when clicking on "Skip"', async () => {
    const { user } = setup(<Onboarding />);

    const button = screen.getByTestId("button-skip");

    await user.press(button);

    // Check if onChangeOnboardingStatus was called
    expect(mockOnChangeOnboardingStatus).toHaveBeenCalledWith(true);

    // Check if router.replace was called with the correct path
    expect(mockReplace).toHaveBeenCalledWith("/auth");
  });
});
