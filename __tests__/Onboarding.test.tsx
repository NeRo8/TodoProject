import { renderWithProviders } from "@/utils/test-utils";

import Onboarding from "@/app/onboarding";

describe("Onboarding", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithProviders(<Onboarding />);
    expect(getByText("Onboarding page")).toBeTruthy();
  });
});
