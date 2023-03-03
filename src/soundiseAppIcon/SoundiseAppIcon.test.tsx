import React from 'react';
import { render } from 'tests';
import { SoundiseAppIcon } from './SoundiseAppIcon';

describe('SoundiseAppIcon', () => {
  it('should render Soundise app icon as an SVG', () => {
    const { getByTestId } = render(<SoundiseAppIcon />);
    const soundiseAppIcon = getByTestId('soundise-app-icon');

    expect(soundiseAppIcon).toBeInTheDocument();
    expect(soundiseAppIcon.tagName).toBe('svg');
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
