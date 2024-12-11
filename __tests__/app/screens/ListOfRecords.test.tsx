import { render, screen } from "@/utils/test-utils";

import ListOfRecords from "@/app/(main)/index";

describe("ListOfRecords", () => {
  it("renders correctly", () => {
    render(<ListOfRecords />);

    expect(screen.getByText("Records page")).toBeTruthy();
  });
});
