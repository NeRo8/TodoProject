import { Text as RNText, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface ITextProps extends TextProps {
  type?:
    | "x_lage_bold"
    | "large_bold"
    | "large_medium"
    | "large_regular"
    | "medium_bold"
    | "medium_medium"
    | "medium_regular"
    | "small_bold"
    | "small_medium"
    | "small_regular";
}

export const BodyText = ({ children, type = "medium_medium", ...props }: ITextProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNText {...props} style={[styles[type], props.style]}>
      {children}
    </RNText>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  x_lage_bold: {
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
    color: theme.colors.text,
  },
  large_bold: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
    color: theme.colors.text,
  },
  large_medium: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: theme.colors.text,
  },
  large_regular: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: theme.colors.text,
  },
  medium_bold: {
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
    color: theme.colors.text,
  },
  medium_medium: {
    fontFamily: "Roboto_500Medium",
    fontSize: 14,
    color: theme.colors.text,
  },
  medium_regular: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: theme.colors.text,
  },
  small_bold: {
    fontFamily: "Roboto_700Bold",
    fontSize: 12,
    color: theme.colors.text,
  },
  small_medium: {
    fontFamily: "Roboto_500Medium",
    fontSize: 12,
    color: theme.colors.text,
  },
  small_regular: {
    fontFamily: "Roboto_400Regular",
    fontSize: 12,
    color: theme.colors.text,
  },
}));
