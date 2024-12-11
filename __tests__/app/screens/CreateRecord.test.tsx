import { render, screen } from "@/utils/test-utils";

import CreateRecord from "@/app/(main)/create-record";

describe("CreateRecord", () => {
  it("renders correctly", () => {
    render(<CreateRecord />);

    expect(screen.getByText("Create record page")).toBeTruthy();
  });
});
