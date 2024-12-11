import { renderWithProviders } from "@/utils/test-utils";

import SignUp from "@/app/auth/sign-up";

describe("SignUp", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithProviders(<SignUp />);

    expect(getByText("SignUp page")).toBeTruthy();
  });
});
