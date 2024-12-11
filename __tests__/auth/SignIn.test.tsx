import { renderWithProviders } from "@/utils/test-utils";

import SignIn from "@/app/auth/index";

describe("SignIn", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithProviders(<SignIn />);

    expect(getByText("Sign In")).toBeTruthy();
  });
});
