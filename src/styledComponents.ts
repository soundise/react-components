import styled from 'styled-components';
import type { StyledInterface } from 'styled-components';

export * from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultStyled: StyledInterface =
  typeof styled === 'function' ? styled : (styled as any).default;

export { defaultStyled as default };
