import { Link } from 'react-router';

import type { Film } from '../../types/film.ts';
import { getFilmDirector, getFilmUrl, truncateText } from '../../utilities.ts';

import * as Styled from './FilmReviewCard.styles.ts';

interface FilmReviewCardProps {
  film: Film;
  isTruncated: boolean;
}

export const FilmReviewCard = (props: FilmReviewCardProps) => {
  const filmDirector = getFilmDirector(props.film);

  return (
    <Styled.Container>
      <Styled.Details>
        <h2>{props.film.title}</h2>

        <Styled.DirectorAndReleaseYearWrapper>
          {filmDirector && <div>{filmDirector}</div>}

          <div>{props.film.release_year}</div>
        </Styled.DirectorAndReleaseYearWrapper>
      </Styled.Details>

      <Styled.ImageWrapper>
        <Styled.Image src={props.film.image_url} alt="" />
      </Styled.ImageWrapper>

      <Styled.Review>
        {props.isTruncated && props.film.review
          ? truncateText(props.film.review, 150)
          : props.film.review}
      </Styled.Review>

      {props.isTruncated && (
        <Styled.ReadMoreLink>
          <Link to={getFilmUrl(props.film)}>Read more</Link>
        </Styled.ReadMoreLink>
      )}
    </Styled.Container>
  );
};
