import styled from 'styled-components';
import { convertPxToRem } from '../../utilities.ts';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  appearance: none;
  border: 1px dashed ${({ theme }) => theme.colors.borders};
  font-family: inherit;
  font-size: inherit;
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

export const Suggestions = styled.ul`
  background: #fff;
  border: 1px dashed ${({ theme }) => theme.colors.borders};
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  list-style: none;
  margin: 0;
  max-height: ${convertPxToRem(150)};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.md};
  position: absolute;
  width: 100%;
`;

interface SuggestionProps {
  $isHighlighted: boolean;
  $isSelected: boolean;
}

export const Suggestion = styled.li<SuggestionProps>`
  cursor: pointer;
  font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 'none')};
  text-decoration: ${({ $isHighlighted }) =>
    $isHighlighted ? 'underline' : 'none'};
`;
