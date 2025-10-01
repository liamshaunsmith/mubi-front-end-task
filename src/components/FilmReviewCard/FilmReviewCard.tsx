import { Link } from 'react-router';

import type { Film } from '../../types/types.ts';
import { getFilmDirector, getFilmUrl } from '../../utilities.ts';

import * as Styled from './FilmReviewCard.styles.ts';

interface FilmReviewCardProps {
  film: Film;
  isTruncated: boolean;
}

export const FilmReviewCard = (props: FilmReviewCardProps) => {
  const filmDirector = getFilmDirector(props.film);

  return (
    <Styled.Container $isBordered={props.isTruncated}>
      <Styled.Details>
        <h2>{props.film.title}</h2>

        <Styled.DirectorAndReleaseYearWrapper>
          {filmDirector && <p>{filmDirector}</p>}

          <p>{props.film.release_year}</p>
        </Styled.DirectorAndReleaseYearWrapper>
      </Styled.Details>

      <Styled.ImageWrapper>
        <Styled.Image src={props.film.image_url} alt="" />
      </Styled.ImageWrapper>

      <Styled.Review></Styled.Review>

      {props.isTruncated && (
        <Styled.ReadMoreLink>
          <Link to={getFilmUrl(props.film)}>Read more</Link>
        </Styled.ReadMoreLink>
      )}
    </Styled.Container>
  );
};
