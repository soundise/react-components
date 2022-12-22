import type { ITheme } from './theme';
import * as colors from './colors';
import { breakpoints } from './breakpoints';

export const darkTheme: ITheme = {
  colors: {
    background: colors.neutral.black,
    foreground: colors.neutral.white,
    ...colors,
  },
  breakpoints: {
    ...breakpoints,
  },
};
