import 'styled-components';
import type { ITheme } from 'components';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
