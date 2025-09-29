import deleteIcon from '/icons/delete-icon.svg';
import leftArrowIcon from '/icons/left-arrow-icon.svg';
import plusIcon from '/icons/plus-icon.svg';

import * as Styled from './Icon.styles.ts';

const ICONS = {
  delete: deleteIcon,
  leftArrow: leftArrowIcon,
  plus: plusIcon,
};

export type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
}

export const Icon = (props: IconProps) => (
  <Styled.Icon src={ICONS[props.name]} alt="" />
);
