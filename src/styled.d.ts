import 'styled-components';
import type { ITheme } from 'src';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
