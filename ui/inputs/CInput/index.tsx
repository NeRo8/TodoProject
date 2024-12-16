import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";
import { useStyles, createStyleSheet } from "react-native-unistyles";

import { CText } from "@/ui/texts/CText";

interface CInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
}

export const CInput = ({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  label,
  labelStyle,
  ...props
}: CInputProps) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <CText type="medium_medium" style={[styles.labelStyle, labelStyle]}>
        {label}
      </CText>
      <View style={[styles.inputContainerStyle, inputContainerStyle]}>
        <TextInput
          {...props}
          placeholderTextColor={theme.colors.gray400}
          style={[styles.inputStyle, inputStyle]}
        />
      </View>
    </View>
  );
};

const INPUT_HEIGHT = 48;
const INPUT_BORDER_RADIUS = 8;

const stylesheet = createStyleSheet((theme) => ({
  containerStyle: {
    gap: 8,
  },
  inputContainerStyle: {
    height: INPUT_HEIGHT,
    borderRadius: INPUT_BORDER_RADIUS,
    backgroundColor: theme.colors.gray50,
    borderWidth: 1,
    borderColor: theme.colors.gray50,
  },
  emptyInputStyle: {
    fontFamily: "Roboto_400Regular",
  },
  labelStyle: {
    color: theme.colors.gray900,
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 16,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: theme.colors.gray900,
    //HINT: outlineColor work only on web, for mobile use borderColors and useState
    outlineColor: theme.colors.primary500,
  },
}));
