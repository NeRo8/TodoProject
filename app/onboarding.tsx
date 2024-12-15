import { View, Text, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

import { CButton, SButton, XSButton } from "@/ui/buttons/Button";

import { useAppContext } from "@/providers/AppProvider";

export default function Onboarding() {
  const router = useRouter();
  const { onChangeOnboardingStatus } = useAppContext();

  const onCompleteOnboarding = () => onChangeOnboardingStatus(true);

  const handleClickSkip = () => {
    onCompleteOnboarding();
    router.replace("/auth");
  };

  return (
    <View>
      <TouchableOpacity testID="button-skip" onPress={handleClickSkip}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <Text>Onboarding page</Text>
      <CButton title="Continue" />
      <SButton type="secondary" title="Sign In" />
      <XSButton type="primary" title="Sign Up" />

      <CButton disabled title="Continue" />
      <SButton disabled type="secondary" title="Sign In" />
      <XSButton disabled type="primary" title="Sign Up" />
    </View>
  );
}
