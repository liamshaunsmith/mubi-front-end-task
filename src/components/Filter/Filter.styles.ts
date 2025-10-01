import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const Filter = styled.select`
  appearance: none;
  background: ${({ theme }) => theme.colors.background};
  border: 1px dashed ${({ theme }) => theme.colors.borders};
  border-radius: 0;
  font-family: inherit;
  font-size: inherit;
  padding: ${({ theme }) => theme.spacing.md};
`;
