import styled from 'styled-components';

import { convertPxToRem } from '../../../utilities.ts';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 auto;
    max-width: ${convertPxToRem(500)};
    width: 70%;
  }
`;

export const FieldWrapper = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: 0;
`;

export const Textarea = styled.textarea`
  appearance: none;
  border: 1px dashed ${({ theme }) => theme.colors.borders};
  font-family: inherit;
  font-size: inherit;
  height: ${convertPxToRem(150)};
  max-width: 100%;
  min-width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SaveButton = styled.button`
  appearance: none;
  background: #fff;
  border: 1px dashed ${({ theme }) => theme.colors.borders};
  flex-grow: 0;
  align-self: flex-end;
  font-family: inherit;
  font-size: inherit;
  padding: ${({ theme }) => theme.spacing.md};
`;
