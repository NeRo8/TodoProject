import { render, screen } from "@/utils/test-utils";

import Settings from "@/app/(main)/settings";

describe("Settings", () => {
  it("renders correctly", () => {
    render(<Settings />);

    expect(screen.getByText("Settings page")).toBeTruthy();
  });
});
