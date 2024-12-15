import { lightTheme } from "../themes/light";

interface AppThemes {
  light: typeof lightTheme;
}

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends {}, AppThemes {}
}
