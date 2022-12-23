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
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.primary.pr500} ${({
  theme,
}) => theme.colors.background};
  }

  *::selection {
    background-color: ${({ theme }) => theme.colors.primary.pr500};
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary.pr500};
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};;
  }

  ::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.colors.background};;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
  }
`;
