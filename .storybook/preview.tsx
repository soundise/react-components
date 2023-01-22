import type { StoryFn, Parameters, Decorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
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
  options: {
    storySort: {
      order: ['Introduction', 'Brand Identity', 'Components'],
    },
  },
  docs: {
    theme: isDarkMode() ? soundiseDark : soundiseLight,
  },
  backgrounds: {
    values: [
      {
        name: 'Light',
        value: lightTheme.colors.foreground,
      },
      {
        name: 'Dark',
        value: darkTheme.colors.foreground,
      },
    ],
  },
};

export const decorators: Decorator[] = [
  (Story: StoryFn) => (
    <ThemeProvider theme={isDarkMode() ? darkTheme : lightTheme}>
      <GlobalStyle />
      <PreviewStyle />
      <Story />
    </ThemeProvider>
  ),
];

const PreviewStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.foreground};
  }
`;
