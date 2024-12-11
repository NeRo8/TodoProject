import { renderWithProviders } from "@/utils/test-utils";

import ListOfRecords from "@/app/(main)/index";

describe("ListOfRecords", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithProviders(<ListOfRecords />);

    expect(getByText("Records page")).toBeTruthy();
  });
});
