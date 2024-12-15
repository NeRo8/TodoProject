import { createStyleSheet, useStyles } from "react-native-unistyles";

import { CButton, ICButtonProps } from "./CButton";

export const SButton = (props: ICButtonProps) => {
  const { styles } = useStyles(stylesheet);

  const isPrimary = props.type === "primary";

  return (
    <CButton
      {...props}
      titleType="medium_bold"
      containerStyle={isPrimary ? styles.containerPrimary : styles.containerSecondary}
    />
  );
};

const BUTTON_HEIGHT = 36;
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
