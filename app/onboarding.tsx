import { View } from "react-native";

import { CButton, SButton, XSButton } from "@/ui/buttons/Button";
import { OutlinedButton } from "@/ui/buttons/OutlinedButton";
import { CInput } from "@/ui/inputs/CInput";

export default function Onboarding() {
  return (
    <View style={{ flex: 1, gap: 16, padding: 16 }}>
      <CButton title="Continue" />
      <SButton type="secondary" title="Sign In" />
      <XSButton type="primary" title="Sign Up" />
      <OutlinedButton title="Sign in with Google" />

      <CButton disabled title="Continue" />
      <SButton disabled type="secondary" title="Sign In" />
      <XSButton disabled type="primary" title="Sign Up" />

      <OutlinedButton disabled title="Sign in with Google" />

      <CInput label="Email" placeholder="Your email" />
      <CInput label="Password" placeholder="Your password" />
      <CInput label="Name" placeholder="Your name" />
    </View>
  );
}
