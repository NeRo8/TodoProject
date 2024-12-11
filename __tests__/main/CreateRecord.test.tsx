import { renderWithProviders } from "@/utils/test-utils";

import CreateRecord from "@/app/(main)/create-record";

describe("CreateRecord", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithProviders(<CreateRecord />);

    expect(getByText("Create record page")).toBeTruthy();
  });
});
