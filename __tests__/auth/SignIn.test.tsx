import { render, screen } from "@/utils/test-utils";

import SignIn from "@/app/auth/index";

describe("SignIn", () => {
  it("renders correctly", () => {
    render(<SignIn />);

    expect(screen.getByText("Sign In")).toBeTruthy();
  });
});
