import styled from 'styled-components';

export const Container = styled.footer`
  align-items: center;
  border-top: 1px dotted ${({ theme }) => theme.colors.headerAndFooter};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;
