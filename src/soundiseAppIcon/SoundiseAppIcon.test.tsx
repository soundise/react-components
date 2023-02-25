import React from 'react';
import { render } from 'tests';
import 'jest-styled-components';
import { SoundiseAppIcon } from './SoundiseAppIcon';
import { darkTheme } from '../theme';

describe('SoundiseAppIcon', () => {
  it('should render Soundise app icon as an SVG', () => {
    const { getByTestId } = render(<SoundiseAppIcon />);
    const soundiseAppIcon = getByTestId('soundise-app-icon');

    expect(soundiseAppIcon).toBeInTheDocument();
    expect(soundiseAppIcon.tagName).toBe('svg');
  });

  it('should render primary Soundise app icon', () => {
    const { getAllByTestId, getByTestId } = render(
      <SoundiseAppIcon variant="primary" />
    );
    const soundiseAppIconRect = getByTestId('soundise-app-icon-rect');
    const soundiseAppIconPaths = getAllByTestId('soundise-app-icon-path');

    expect(soundiseAppIconRect).toHaveStyleRule(
      'fill',
      darkTheme.colors.brand.primary
    );
    soundiseAppIconPaths.forEach((path) => {
      expect(path).toHaveStyleRule('fill', darkTheme.colors.brand.secondary);
    });
  });

  it('should render secondary Soundise app icon', () => {
    const { getAllByTestId, getByTestId } = render(
      <SoundiseAppIcon variant="secondary" />
    );
    const soundiseAppIconRect = getByTestId('soundise-app-icon-rect');
    const soundiseAppIconPaths = getAllByTestId('soundise-app-icon-path');

    expect(soundiseAppIconRect).toHaveStyleRule(
      'fill',
      darkTheme.colors.brand.secondary
    );
    soundiseAppIconPaths.forEach((path) => {
      expect(path).toHaveStyleRule('fill', darkTheme.colors.brand.primary);
    });
  });

  it('should match primary Soundise app icon snapshot', () => {
    const { getByTestId } = render(<SoundiseAppIcon variant="primary" />);
    const soundiseAppIcon = getByTestId('soundise-app-icon');

    expect(soundiseAppIcon).toMatchSnapshot();
  });

  it('should match secondary Soundise app icon snapshot', () => {
    const { getByTestId } = render(<SoundiseAppIcon variant="secondary" />);
    const soundiseAppIcon = getByTestId('soundise-app-icon');

    expect(soundiseAppIcon).toMatchSnapshot();
  });
});
