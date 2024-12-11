import { render, screen } from "@/utils/test-utils";

import SignUp from "@/app/auth/sign-up";

describe("SignUp", () => {
  it("renders correctly", () => {
    render(<SignUp />);

    expect(screen.getByText("SignUp page")).toBeTruthy();
  });
});
