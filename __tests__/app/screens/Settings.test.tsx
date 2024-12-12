import Settings from "@/app/(main)/settings";

import { render, screen } from "@/utils/test-utils";

describe("Settings", () => {
  it("renders correctly", () => {
    render(<Settings />);

    expect(screen.getByText("Settings page")).toBeTruthy();
  });
});
