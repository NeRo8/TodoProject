import { useAppContext } from "@/providers/AppProvider";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

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
    </View>
  );
}
