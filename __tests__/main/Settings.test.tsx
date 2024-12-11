import { renderWithProviders } from "@/utils/test-utils";

import Settings from "@/app/(main)/settings";

describe("Settings", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithProviders(<Settings />);

    expect(getByText("Settings page")).toBeTruthy();
  });
});
