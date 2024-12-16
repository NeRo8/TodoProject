import { Text as RNText, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type CTextTypes =
  | "x_lage_bold"
  | "large_bold"
  | "large_medium"
  | "large_regular"
  | "medium_bold"
  | "medium_medium"
  | "medium_regular"
  | "small_bold"
  | "small_medium"
  | "small_regular"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

interface ICTextProps extends TextProps {
  /**
   * The type of text style to apply.
   *
   * Available types and their sizes:
   *
   * - `"x_lage_bold"`: 18px, Roboto Medium.
   * - `"large_bold"`: 16px, Roboto Bold.
   * - `"large_medium"`: 16px, Roboto Medium.
   * - `"large_regular"`: 16px, Roboto Regular.
   * - `"medium_bold"`: 14px, Roboto Bold.
   * - `"medium_medium"`: 14px, Roboto Medium.
   * - `"medium_regular"`: 14px, Roboto Regular.
   * - `"small_bold"`: 12px, Roboto Bold.
   * - `"small_medium"`: 12px, Roboto Medium.
   * - `"small_regular"`: 12px, Roboto Regular.
   * - `"h1"`: 40px, OpenSans Bold.
   * - `"h2"`: 32px, OpenSans Bold.
   * - `"h3"`: 24px, OpenSans Bold.
   * - `"h4"`: 20px, OpenSans Bold.
   * - `"h5"`: 18px, OpenSans Bold.
   * - `"h6"`: 16px, OpenSans Bold.
   *
   * @default "h1"
   */
  type?: CTextTypes;
}

export const CText = ({ children, type = "h1", ...props }: ICTextProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNText {...props} style={[styles[type], props.style]}>
      {children}
    </RNText>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  h1: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 40,
    color: theme.colors.heading,
  },
  h2: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 32,
    color: theme.colors.heading,
  },
  h3: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 24,
    color: theme.colors.heading,
  },
  h4: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 20,
    color: theme.colors.heading,
  },
  h5: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 18,
    color: theme.colors.heading,
  },
  h6: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 16,
    color: theme.colors.heading,
  },
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
