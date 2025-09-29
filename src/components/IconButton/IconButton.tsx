import { Icon, type IconName } from '../Icon/Icon.tsx';

import * as Styled from './IconButton.styles.ts';

export interface IconButtonProps {
  icon: IconName;
  label: string;
  onClick: () => void;
}

export const IconButton = (props: IconButtonProps) => (
  <Styled.Button
    aria-label={props.label}
    onClick={props.onClick}
    title={props.label}
  >
    <Icon name={props.icon} />
  </Styled.Button>
);
