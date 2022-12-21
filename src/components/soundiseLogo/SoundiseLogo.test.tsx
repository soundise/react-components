import React from 'react';
import { render, cleanup } from 'tests';
import { SoundiseLogo } from 'components';

afterEach(cleanup);

describe('SoundiseLogo', () => {
  it('should render the Soundise logo as an SVG', () => {
    const { getByTestId } = render(<SoundiseLogo />);
    const soundiseLogo = getByTestId('soundise-logo');

    expect(soundiseLogo).toBeInTheDocument();
    expect(soundiseLogo.tagName).toBe('svg');
  });
});
