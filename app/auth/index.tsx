import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function SignInPage() {
  const router = useRouter();
  const { onChangeAuthStatus } = useAuthContext();

  const handleClickSignIn = () => {
    onChangeAuthStatus(true);
    router.replace("/(main)");
  };

  return (
    <View>
      <Text>SignIn page</Text>
      <TouchableOpacity onPress={handleClickSignIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
