import { createStyleSheet, useStyles } from "react-native-unistyles";

import { CButton, ICButtonProps } from "./CButton";

export const XSButton = (props: ICButtonProps) => {
  const { styles } = useStyles(stylesheet);

  const isPrimary = props.type === "primary";

  return (
    <CButton
      {...props}
      titleType="small_medium"
      containerStyle={isPrimary ? styles.containerPrimary : styles.containerSecondary}
    />
  );
};

const BUTTON_HEIGHT = 32;
const BUTTON_RADIUS = BUTTON_HEIGHT;

const stylesheet = createStyleSheet((theme) => ({
  containerPrimary: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
  },
  containerSecondary: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
  },
}));
