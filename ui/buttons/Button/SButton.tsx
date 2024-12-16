import { createStyleSheet, useStyles } from "react-native-unistyles";

import { CButton, ICButtonProps } from "./CButton";

export const SButton = (props: ICButtonProps) => {
  const { styles } = useStyles(stylesheet);

  const isPrimary = props.type === "primary";

  return (
    <CButton
      {...props}
      titleType="medium_bold"
      containerStyle={isPrimary ? styles.containerPrimaryStyle : styles.containerSecondaryStyle}
    />
  );
};

const BUTTON_HEIGHT = 36;
const BUTTON_RADIUS = BUTTON_HEIGHT;

const stylesheet = createStyleSheet((theme) => ({
  containerPrimaryStyle: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
  },
  containerSecondaryStyle: {
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_RADIUS,
  },
}));
