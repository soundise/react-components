export const isDarkMode = () => {
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  return colorSchemeQuery.matches;
};
