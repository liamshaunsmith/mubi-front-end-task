import styled from 'styled-components';

interface ContainerProps {
  isBordered: boolean;
}

export const Container = styled.article<ContainerProps>`
  border: ${({ isBordered, theme }) =>
    isBordered ? `1px dotted ${theme.colors.borders}` : 'none'};

  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.md};
  grid-template-areas:
    'details image'
    'review view'
    'readMoreLink readMoreLink';
  grid-template-columns: auto 40%;
  grid-template-rows: auto auto auto;

  padding: ${({ isBordered, theme }) => (isBordered ? theme.spacing.lg : 0)};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  grid-area: details;
`;

export const DirectorAndReleaseYearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.subtext};
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ImageWrapper = styled.div`
  grid-area: image;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Review = styled.div`
  grid-area: review;
  grid-column: 1 / -1;
`;

export const ReadMoreLink = styled.div`
  grid-area: readMoreLink;
  grid-column: 1 / -1;
`;
