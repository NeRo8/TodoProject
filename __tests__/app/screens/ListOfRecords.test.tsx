import ListOfRecords from "@/app/(main)/index";

import { render, screen } from "@/utils/test-utils";

describe("ListOfRecords", () => {
  it("renders correctly", () => {
    render(<ListOfRecords />);

    expect(screen.getByText("Records page")).toBeTruthy();
  });
});
