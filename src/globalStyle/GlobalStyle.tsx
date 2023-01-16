import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fonts.primary}, ${({
  theme,
}) => theme.typography.fonts.secondary}, ${({ theme }) =>
  theme.typography.fonts.fallback};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    accent-color: ${({ theme }) => theme.colors.brand.tertiary};
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.brand.tertiary} ${({
  theme,
}) => theme.colors.background};
  }

  *::selection {
    background-color: ${({ theme }) => theme.colors.brand.tertiary};
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.brand.tertiary};
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  *::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.colors.background};
  }

  html {
    color-scheme: ${({ theme }) => theme.variant};
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    position: relative;
    font-size: 100%;
    background: ${({ theme }) => theme.colors.background};
  }

  pre, code {
    font-family: ${({ theme }) => theme.typography.fonts.code.primary}, ${({
  theme,
}) => theme.typography.fonts.code.secondary}, ${({ theme }) =>
  theme.typography.fonts.code.fallback};
  }
`;
