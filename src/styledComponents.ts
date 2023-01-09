import styled from 'styled-components';
import type { StyledInterface } from 'styled-components';

export * from 'styled-components';

const defaultStyled: StyledInterface =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typeof styled === 'function' ? styled : (styled as any).default;

export { defaultStyled as default };
