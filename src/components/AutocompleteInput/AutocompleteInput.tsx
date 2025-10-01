import { useState } from 'react';
import { useCombobox } from 'downshift';

import * as Styled from './AutocompleteInput.styles.ts';

export interface AutocompleteInputOption {
  label: string;
  value: string;
}

interface AutocompleteInputProps {
  options: AutocompleteInputOption[];
  onChange: (selectedOption: AutocompleteInputOption | null) => void;
  placeholder: string;
}

export const AutocompleteInput = (props: AutocompleteInputProps) => {
  const [suggestions, setSuggestions] = useState<AutocompleteInputOption[]>(
    props.options,
  );

  const {
    highlightedIndex,
    isOpen,
    getInputProps,
    getItemProps,
    getMenuProps,
    selectedItem,
  } = useCombobox<AutocompleteInputOption>({
    items: suggestions,
    itemToString: (item) => (item ? item.label : ''),
    onInputValueChange: (inputValueChange) =>
      setSuggestions(
        props.options.filter((option) =>
          option.label
            .toLowerCase()
            .includes(inputValueChange.inputValue.trim().toLowerCase()),
        ),
      ),
    onSelectedItemChange: (event) => props.onChange(event.selectedItem),
  });

  return (
    <Styled.Container>
      <Styled.Input
        placeholder={props.placeholder}
        type="text"
        {...getInputProps()}
      />

      {isOpen && (
        <Styled.Suggestions {...getMenuProps()}>
          {suggestions.map((suggestion, suggestionIndex) => (
            <Styled.Suggestion
              $isHighlighted={highlightedIndex === suggestionIndex}
              $isSelected={selectedItem?.value === suggestion.value}
              key={suggestion.value}
              {...getItemProps({
                item: suggestion,
                index: suggestionIndex,
              })}
            >
              {suggestion.label}
            </Styled.Suggestion>
          ))}
        </Styled.Suggestions>
      )}
    </Styled.Container>
  );
};
