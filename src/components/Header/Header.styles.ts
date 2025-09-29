import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  display: grid;
  background: ${({ theme }) => theme.colors.headerAndFooter};
  grid-template-columns: 1fr auto 1fr;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const LeadingColumn = styled.div`
  justify-self: start;
`;

export const CentralColumn = styled.div`
  justify-self: center;
`;

export const TrailingColumn = styled.div`
  justify-self: end;
`;

export const Logo = styled.img`
  width: 94px;
`;
