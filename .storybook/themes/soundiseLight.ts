import { create } from '@storybook/theming';
import { lightTheme } from '../../src';

export const soundiseLight = create({
  base: 'light',

  colorPrimary: lightTheme.colors.brand.secondary,
  colorSecondary: lightTheme.colors.brand.tertiary,

  appBg: lightTheme.colors.background,
  appContentBg: lightTheme.colors.background,
  appBorderColor: lightTheme.colors.border,
  appBorderRadius: 4,

  fontBase: `${lightTheme.typography.fonts.primary}, ${lightTheme.typography.fonts.fallback}`,
  fontCode: `${lightTheme.typography.fonts.code.primary}, ${lightTheme.typography.fonts.code.fallback}`,

  textColor: lightTheme.colors.text.primary,
  textInverseColor: lightTheme.colors.text.secondary,
  textMutedColor: lightTheme.colors.gray.gr400,

  barTextColor: lightTheme.colors.gray.gr400,
  barSelectedColor: lightTheme.colors.text.primary,
  barBg: lightTheme.colors.background,

  inputBg: lightTheme.colors.foreground,
  inputBorder: lightTheme.colors.border,
  inputTextColor: lightTheme.colors.text.primary,
  inputBorderRadius: 8,

  brandTitle: 'Soundise',
  brandUrl: 'https://soundise.com',
  brandImage: 'https://assets.soundise.com/logos/logo-dark.svg',
  brandTarget: '_blank',
});
