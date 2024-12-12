import CreateRecord from "@/app/(main)/create-record";

import { render, screen } from "@/utils/test-utils";

describe("CreateRecord", () => {
  it("renders correctly", () => {
    render(<CreateRecord />);

    expect(screen.getByText("Create record page")).toBeTruthy();
  });
});
