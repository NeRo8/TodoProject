import { View, Text, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

import { useAuthContext } from "@/providers/AuthProvider";

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
