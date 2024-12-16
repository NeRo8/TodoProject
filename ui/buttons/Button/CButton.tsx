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
    isPrimary ? styles.containerPrimaryStyle : styles.containerSecondaryStyle,
    disabled && styles.disabledContainerStyle,
    props.containerStyle,
  ];

  const titleStyle = [
    isPrimary ? styles.titlePrimaryStyle : styles.titleSecondaryStyle,
    disabled && styles.disabledTitleStyle,
    props.titleStyle,
  ];

  return (
    <TouchableOpacity {...props} disabled={disabled} style={containerStyle}>
      <CText disabled={disabled} type={titleType} style={titleStyle}>
        {title}
      </CText>
    </TouchableOpacity>
  );
};

const BUTTON_HEIGHT = 48;
const BUTTON_RADIUS = BUTTON_HEIGHT;

const stylesheet = createStyleSheet((theme) => ({
  containerPrimaryStyle: {
    backgroundColor: theme.colors.primary500,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSecondaryStyle: {
    backgroundColor: theme.colors.primary50,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titlePrimaryStyle: {
    color: theme.colors.white,
  },
  titleSecondaryStyle: {
    color: theme.colors.primary500,
  },
  disabledContainerStyle: {
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray200,
  },
  disabledTitleStyle: {
    color: theme.colors.gray500,
  },
}));
