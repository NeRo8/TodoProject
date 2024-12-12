import SignIn from "@/app/auth/index";

import { render, screen } from "@/utils/test-utils";

describe("SignIn", () => {
  it("renders correctly", () => {
    render(<SignIn />);

    expect(screen.getByText("Sign In")).toBeTruthy();
  });
});
