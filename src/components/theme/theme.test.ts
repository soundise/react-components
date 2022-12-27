import { cleanup } from 'tests';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import * as typography from './typography';
import * as colors from './colors';
import { breakpoints } from './breakpoints';

afterEach(cleanup);

describe('Theme', () => {
  it('should export an object', () => {
    expect(typeof darkTheme).toBe('object');
    expect(typeof lightTheme).toBe('object');
  });

  it('should export typography', () => {
    expect(typeof typography).toBe('object');
  });

  it('should export colors', () => {
    expect(typeof colors).toBe('object');
  });

  it('should export breakpoints', () => {
    expect(typeof breakpoints).toBe('object');
  });

  it('snapshot', () => {
    expect(darkTheme).toMatchSnapshot();
    expect(lightTheme).toMatchSnapshot();
  });
});
