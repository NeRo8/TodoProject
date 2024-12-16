import { useState } from "react";

import { CInput, CInputProps } from "../CInput";

export const PasswordInput = (props: CInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onPressIcon = () => setIsPasswordVisible((prev) => !prev);

  return (
    <CInput
      {...props}
      keyboardType="visible-password"
      iconName={isPasswordVisible ? "eye" : "eyeo"}
      onPressIcon={onPressIcon}
    />
  );
};
