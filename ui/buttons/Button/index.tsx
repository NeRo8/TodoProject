import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  type?: "primary" | "secondary";
}

export const Button = ({ title, type = "primary", ...props }: IButtonProps) => {
  const { styles } = useStyles(stylesheet);

  const isPrimary = type === "primary";

  return (
    <TouchableOpacity
      {...props}
      style={isPrimary ? styles.containerPrimary : styles.containerSecondary}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  containerPrimary: {
    backgroundColor: theme.colors.primary500,
    height: 48,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  containerSecondary: {
    backgroundColor: theme.colors.primary50,
    height: 48,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
}));
