import type { StoryFn, Parameters, Decorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from '../src';
import { isDarkMode } from './utils';
import { soundiseLight, soundiseDark } from './themes';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: isDarkMode() ? soundiseDark : soundiseLight,
  },
};

const PreviewStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.gray.gr100};

      ${({ theme }) =>
        theme.variant === 'dark' &&
        css`
          background: ${({ theme }) => theme.colors.gray.gr900};
        `}
  }
`;

export const decorators: Decorator[] = [
  (Story: StoryFn) => (
    <ThemeProvider theme={isDarkMode() ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PreviewStyle />
      <Story />
    </ThemeProvider>
  ),
];
