import styled from 'styled-components';

export const Container = styled.article`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.md};
  grid-template-areas:
    'details image'
    'review view'
    'readMoreLink readMoreLink';
  grid-template-columns: 60% 40%;
  grid-template-rows: auto auto auto;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  grid-area: details;
`;

export const DirectorAndReleaseYearWrapper = styled.div`
  color: ${({ theme }) => theme.colors.subtext};
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
