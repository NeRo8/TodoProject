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

  const containerStyle = isPrimary ? styles.containerPrimary : styles.containerSecondary;
  const titleStyle = isPrimary ? styles.titlePrimary : styles.titleSecondary;

  return (
    <TouchableOpacity {...props} disabled={disabled} style={[containerStyle, props.containerStyle]}>
      <CText type={titleType} style={[titleStyle, props.titleStyle]}>
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
}));
