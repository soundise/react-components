import React from 'react';
import { render } from 'tests';
import 'jest-styled-components';
import { SoundiseIcon } from './SoundiseIcon';
import { darkTheme } from '../theme';

describe('SoundiseIcon', () => {
  it('should render Soundise icon as an SVG', () => {
    const { getByTestId } = render(<SoundiseIcon />);
    const soundiseIcon = getByTestId('soundise-icon');

    expect(soundiseIcon).toBeInTheDocument();
    expect(soundiseIcon.tagName).toBe('svg');
  });

  it('should render primary Soundise icon', () => {
    const { getAllByTestId } = render(<SoundiseIcon variant="primary" />);
    const soundiseIconPaths = getAllByTestId('soundise-icon-path');

    soundiseIconPaths.forEach((path) => {
      expect(path).toHaveStyleRule('fill', darkTheme.colors.text.primary);
    });
  });

  it('should render secondary Soundise icon', () => {
    const { getAllByTestId } = render(<SoundiseIcon variant="secondary" />);
    const soundiseIconPaths = getAllByTestId('soundise-icon-path');

    soundiseIconPaths.forEach((path) => {
      expect(path).toHaveStyleRule('fill', darkTheme.colors.text.secondary);
    });
  });

  it('should match primary Soundise icon snapshot', () => {
    const { getByTestId } = render(<SoundiseIcon variant="primary" />);
    const soundiseIcon = getByTestId('soundise-icon');

    expect(soundiseIcon).toMatchSnapshot();
  });

  it('should match secondary Soundise icon snapshot', () => {
    const { getByTestId } = render(<SoundiseIcon variant="secondary" />);
    const soundiseIcon = getByTestId('soundise-icon');

    expect(soundiseIcon).toMatchSnapshot();
  });
});
