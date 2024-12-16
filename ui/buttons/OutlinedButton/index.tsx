import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { CButton } from "@/ui/buttons/Button";
import { CTextTypes } from "@/ui/texts/CText";

export interface ICButtonProps extends TouchableOpacityProps {
  title: string;
  titleType?: CTextTypes;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export const OutlinedButton = ({
  title,
  titleType = "medium_bold",
  disabled,
  ...props
}: ICButtonProps) => {
  const { styles } = useStyles(stylesheet);

  const containerStyle = [
    styles.containerPrimary,
    disabled && styles.disabledContainer,
    props.containerStyle,
  ];

  const titleStyle = [styles.titlePrimary, disabled && styles.disabledTitle, props.titleStyle];

  return (
    <CButton
      {...props}
      title={title}
      disabled={disabled}
      titleType={titleType}
      containerStyle={containerStyle}
      titleStyle={titleStyle}
    />
  );
};

const BUTTON_HEIGHT = 48;
const BUTTON_RADIUS = BUTTON_HEIGHT;

const stylesheet = createStyleSheet((theme) => ({
  containerPrimary: {
    backgroundColor: theme.colors.white,
    height: BUTTON_HEIGHT,
    borderWidth: 1,
    borderColor: theme.colors.gray200,
    borderRadius: BUTTON_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledContainer: {
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.gray200,
  },
  titlePrimary: {
    color: theme.colors.gray900,
  },
  disabledTitle: {
    color: theme.colors.gray500,
  },
}));
