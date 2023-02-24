import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

describe('Theme', () => {
  it('should match light theme snapshot', () => {
    expect(lightTheme).toMatchSnapshot();
  });

  it('should match dark theme snapshot', () => {
    expect(darkTheme).toMatchSnapshot();
  });
});
