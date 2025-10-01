import { Link, useNavigate } from 'react-router';

import { IconButton, type IconButtonProps } from '../IconButton/IconButton.tsx';

import * as Styled from './Header.styles.ts';

import mubiLogo from '/logo.svg';

export interface HeaderProps {
  isBackwardNavigationEnabled?: boolean;
  trailingIcon?: IconButtonProps;
}

export const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const handleBackwardNavigationButtonOnCLick = () => navigate('/');

  return (
    <Styled.Container>
      <Styled.LeadingColumn>
        {props.isBackwardNavigationEnabled && (
          <IconButton
            icon="leftArrow"
            label="Back to Film Log"
            onClick={handleBackwardNavigationButtonOnCLick}
          />
        )}
      </Styled.LeadingColumn>

      <Styled.CentralColumn>
        <Link to="/">
          <Styled.Logo src={mubiLogo} alt="MUBI" />
        </Link>
      </Styled.CentralColumn>

      <Styled.TrailingColumn>
        {props.trailingIcon && <IconButton {...props.trailingIcon} />}
      </Styled.TrailingColumn>
    </Styled.Container>
  );
};
