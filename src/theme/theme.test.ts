import { cleanup } from 'tests';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

afterEach(cleanup);

describe('Theme', () => {
  it('should match light theme snapshot', () => {
    expect(lightTheme).toMatchSnapshot();
  });

  it('should match dark theme snapshot', () => {
    expect(darkTheme).toMatchSnapshot();
  });
});
