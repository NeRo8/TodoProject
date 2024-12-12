import SignUp from "@/app/auth/sign-up";

import { render, screen } from "@/utils/test-utils";

describe("SignUp", () => {
  it("renders correctly", () => {
    render(<SignUp />);

    expect(screen.getByText("SignUp page")).toBeTruthy();
  });
});
