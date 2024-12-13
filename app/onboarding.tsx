import { View, Text, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

import { Button } from "@/ui/buttons/Button";

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
      <Button title="Continue" />
      <Button type="secondary" title="Sign In" />
    </View>
  );
}
