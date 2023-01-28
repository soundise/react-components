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
}) => theme.typography.fonts.fallback};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.5;
    text-decoration: none;
    overflow-wrap: break-word;
    hyphens: auto;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    accent-color: ${({ theme }) => theme.colors.brand.tertiary};
    scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  *::selection {
    color: ${({ theme }) => theme.colors.neutral.white};
    background-color: ${({ theme }) => theme.colors.brand.tertiary};
  }

  button:focus-visible, a:focus-visible, input[type='checkbox']:focus-visible, input[type='radio']:focus-visible, input[type='range']:focus-visible {
    outline-width: 2px;
    outline-color: ${({ theme }) => theme.colors.brand.tertiary};
  }

  html {
    height: 100%;
    color-scheme: ${({ theme }) => theme.variant};
  }

  body {
    max-width: 100vw;
    height: 100%;
    position: relative;
    font-size: 100%;
    background: ${({ theme }) => theme.colors.background};
  }

  img, picture, video, canvas, svg, iframe {
    max-width: 100%;
    display: block;
    user-select: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  pre, code {
    font-family: ${({ theme }) => theme.typography.fonts.code.primary}, ${({
  theme,
}) => theme.typography.fonts.code.fallback};
  }

  #root, #__next, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    isolation: isolate;
  }
`;
