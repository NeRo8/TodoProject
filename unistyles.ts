import { UnistylesRegistry } from "react-native-unistyles";

import { lightTheme } from "@/themes/light";

UnistylesRegistry.addThemes({
  light: lightTheme,
}).addConfig({
  adaptiveThemes: false,
});
