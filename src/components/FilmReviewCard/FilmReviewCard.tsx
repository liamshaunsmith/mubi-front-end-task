import { Link } from 'react-router';

import type { FilmWithReview } from '../../types/types.ts';
import { getFilmDirector, getFilmUrl, truncateText } from '../../utilities.ts';

import * as Styled from './FilmReviewCard.styles.ts';

interface FilmReviewCardProps {
  filmWithReview: FilmWithReview;
  isTruncated: boolean;
}

export const FilmReviewCard = (props: FilmReviewCardProps) => {
  const filmDirector = getFilmDirector(props.filmWithReview.film);

  return (
    <Styled.Container $isBordered={props.isTruncated}>
      <Styled.Details>
        <h2>{props.filmWithReview.film.title}</h2>

        <Styled.DirectorAndReleaseYearWrapper>
          {filmDirector && <p>{filmDirector}</p>}

          <p>{props.filmWithReview.film.release_year}</p>
        </Styled.DirectorAndReleaseYearWrapper>
      </Styled.Details>

      <Styled.ImageWrapper>
        <Styled.Image src={props.filmWithReview.film.image_url} alt="" />
      </Styled.ImageWrapper>

      <Styled.Review>
        {props.isTruncated
          ? truncateText(props.filmWithReview.review.contents, 150)
          : props.filmWithReview.review.contents}
      </Styled.Review>

      {props.isTruncated && (
        <Styled.ReadMoreLink>
          <Link to={getFilmUrl(props.filmWithReview.film)}>Read more</Link>
        </Styled.ReadMoreLink>
      )}
    </Styled.Container>
  );
};
