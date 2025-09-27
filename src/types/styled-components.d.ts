/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';

import { Theme } from '../theme.ts';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
