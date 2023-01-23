import 'styled-components';
import type { ITheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
