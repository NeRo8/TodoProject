import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { CText, CTextTypes } from "@/ui/texts/CText";

export interface ICButtonProps extends TouchableOpacityProps {
  title: string;
  type?: "primary" | "secondary";
  titleType?: CTextTypes;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export const CButton = ({
  title,
  type = "primary",
  titleType = "h6",
  disabled,
  ...props
}: ICButtonProps) => {
  const { styles } = useStyles(stylesheet);

  const isPrimary = type === "primary";

  const containerStyle = [
    isPrimary ? styles.containerPrimary : styles.containerSecondary,
    disabled && styles.disabledContainer,
    props.containerStyle,
  ];

  const titleStyle = [
    isPrimary ? styles.titlePrimary : styles.titleSecondary,
    disabled && styles.disabledTitle,
    props.titleStyle,
  ];

  return (
    <TouchableOpacity {...props} disabled={disabled} style={containerStyle}>
      <CText type={titleType} style={titleStyle}>
        {title}
      </CText>
    </TouchableOpacity>
  );
};

const BUTTON_HEIGHT = 48;
const BUTTON_RADIUS = BUTTON_HEIGHT;

const stylesheet = createStyleSheet((theme) => ({
  containerPrimary: {
    backgroundColor: theme.colors.primary500,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSecondary: {
    backgroundColor: theme.colors.primary50,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titlePrimary: {
    color: theme.colors.white,
  },
  titleSecondary: {
    color: theme.colors.primary500,
  },
  disabledContainer: {
    borderWidth: 2,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray200,
  },
  disabledTitle: {
    color: theme.colors.gray500,
  },
}));
