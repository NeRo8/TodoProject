import { Text as RNText, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface ITextProps extends TextProps {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const HeadingText = ({ children, type = "h1", ...props }: ITextProps) => {
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
}));
