import type { ReactNode } from 'react';

import * as Styled from './PageTitle.styles.ts';

interface PageTitleProps {
  children?: ReactNode;
  title: string;
}

export const PageTitle = (props: PageTitleProps) => (
  <Styled.Container>
    <h1>{props.title}</h1>

    {props.children && <div>{props.children}</div>}
  </Styled.Container>
);
