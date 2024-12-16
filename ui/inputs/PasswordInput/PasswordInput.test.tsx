import { setup } from "@/utils/test-utils";

import { PasswordInput } from "./index";

describe("PasswordInput", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText } = setup(
      <PasswordInput label="Password" placeholder="Password" />,
    );
    expect(getByPlaceholderText("Password")).toBeTruthy();
  });
});
