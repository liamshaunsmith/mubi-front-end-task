import { Link } from 'react-router';

import { IconButton, type IconButtonProps } from '../IconButton/IconButton.tsx';

import * as Styled from './Header.styles.ts';

import mubiLogo from '/logo.svg';

export interface HeaderProps {
  icons?: {
    leading?: IconButtonProps;
    trailing?: IconButtonProps;
  };
}

export const Header = (props: HeaderProps) => (
  <Styled.Container>
    <Styled.LeadingColumn>
      {props.icons?.leading && <IconButton {...props.icons?.leading} />}
    </Styled.LeadingColumn>

    <Styled.CentralColumn>
      <Link to="/">
        <Styled.Logo src={mubiLogo} alt="MUBI" />
      </Link>
    </Styled.CentralColumn>

    <Styled.TrailingColumn>
      {props.icons?.trailing && <IconButton {...props.icons?.trailing} />}
    </Styled.TrailingColumn>
  </Styled.Container>
);
