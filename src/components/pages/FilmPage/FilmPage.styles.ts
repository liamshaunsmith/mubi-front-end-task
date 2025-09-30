import styled from 'styled-components';

import { convertPxToRem } from '../../../utilities.ts';

export const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 auto;
    max-width: ${convertPxToRem(500)};
    width: 70%;
  }
`;
export const NotFound = styled.p`
  align-items: center;
  display: flex;
  justify-content: center;
`;
