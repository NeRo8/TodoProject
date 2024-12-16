import { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useStyles, createStyleSheet } from "react-native-unistyles";

import { CText } from "@/ui/texts/CText";

export interface CInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  iconName?: keyof typeof AntDesign.glyphMap;
  iconColor?: string;
  iconPosition?: "left" | "right";
  onPressIcon?: () => void;
}

export const CInput = ({
  containerStyle,
  inputContainerStyle,
  inputStyle,
  label,
  labelStyle,
  iconPosition = "left",
  iconName,
  iconColor,
  onPressIcon,
  ...props
}: CInputProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const [isFocused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);

  const onBlur = () => setFocused(false);

  const inputContainerStyleWithIcon = [
    styles.inputContainerStyle,
    inputContainerStyle,
    iconPosition === "right" && styles.inputContainerReverseStyle,
    isFocused && styles.inputContainerFocusedStyle,
  ];

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <CText type="medium_medium" style={[styles.labelStyle, labelStyle]}>
        {label}
      </CText>
      <View style={inputContainerStyleWithIcon}>
        <TouchableOpacity onPress={onPressIcon}>
          <AntDesign name={iconName} size={24} color={iconColor} />
        </TouchableOpacity>
        <TextInput
          {...props}
          placeholderTextColor={theme.colors.gray400}
          style={[styles.inputStyle, inputStyle]}
          onFocus={onFocus}
          onBlur={onBlur}
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
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    height: INPUT_HEIGHT,
    borderRadius: INPUT_BORDER_RADIUS,
    backgroundColor: theme.colors.gray50,
    borderWidth: 1,
    borderColor: theme.colors.gray50,
  },
  inputContainerReverseStyle: {
    flexDirection: "row-reverse",
  },
  inputContainerFocusedStyle: {
    borderWidth: 1,
    borderColor: theme.colors.primary500,
  },
  emptyInputStyle: {
    fontFamily: "Roboto_400Regular",
  },
  labelStyle: {
    color: theme.colors.gray900,
  },
  inputStyle: {
    flex: 1,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    height: INPUT_HEIGHT,
    color: theme.colors.gray900,
    outlineWidth: 0,
  },
}));
