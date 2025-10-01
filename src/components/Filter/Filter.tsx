import { type ChangeEvent, useId } from 'react';

import * as Styled from './Filter.styles.ts';

interface FilterProps {
  label: string;
  onChange: (selectedOption: string | null) => void;
  options: string[];
}

export const Filter = (props: FilterProps) => {
  const accessibilityId = useId();

  const handleFilterOnChange = (event: ChangeEvent<HTMLSelectElement>) =>
    props.onChange(event.target.value === '' ? null : event.target.value);

  return (
    <Styled.Container>
      <Styled.Label htmlFor={accessibilityId}>{props.label}</Styled.Label>

      <Styled.Filter id={accessibilityId} onChange={handleFilterOnChange}>
        <option value="">None</option>

        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Styled.Filter>
    </Styled.Container>
  );
};
