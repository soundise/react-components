import type { ITheme } from './theme';
import * as colors from './colors';

export const lightTheme: ITheme = {
  colors: {
    background: colors.neutral.white,
    foreground: colors.neutral.black,
    ...colors,
  },
};
