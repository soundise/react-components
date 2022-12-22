import type { ITheme } from './theme';
import * as colors from './colors';
import { breakpoints } from './breakpoints';

export const lightTheme: ITheme = {
  colors: {
    background: colors.neutral.white,
    foreground: colors.neutral.black,
    ...colors,
  },
  breakpoints: {
    ...breakpoints,
  },
};
