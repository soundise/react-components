export interface ITheme {
  name: string;
  variant: 'light' | 'dark';
  typography: {
    fonts: {
      primary: string;
      fallback: string;
      code: {
        primary: string;
        fallback: string;
      };
    };
    weights: {
      regular: number;
      bold: number;
    };
  };
  breakpoints: {
    mobileLandscape: string;
    tablet: string;
    desktopSmall: string;
    desktopLarge: string;
  };
  colors: {
    background: string;
    foreground: string;
    border: string;
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    status: {
      success: string;
      warning: string;
      error: string;
    };
    brand: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    neutral: {
      white: string;
      black: string;
    };
    primary: {
      pr050: string;
      pr100: string;
      pr200: string;
      pr300: string;
      pr400: string;
      pr500: string;
      pr600: string;
      pr700: string;
      pr800: string;
      pr900: string;
    };
    gray: {
      gr050: string;
      gr100: string;
      gr200: string;
      gr300: string;
      gr400: string;
      gr500: string;
      gr600: string;
      gr700: string;
      gr800: string;
      gr900: string;
    };
    green: {
      g050: string;
      g100: string;
      g200: string;
      g300: string;
      g400: string;
      g500: string;
      g600: string;
      g700: string;
      g800: string;
      g900: string;
    };
    yellow: {
      y050: string;
      y100: string;
      y200: string;
      y300: string;
      y400: string;
      y500: string;
      y600: string;
      y700: string;
      y800: string;
      y900: string;
    };
    red: {
      r050: string;
      r100: string;
      r200: string;
      r300: string;
      r400: string;
      r500: string;
      r600: string;
      r700: string;
      r800: string;
      r900: string;
    };
  };
}
