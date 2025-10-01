import { useNavigate } from 'react-router';

import { WRITE_FILM_REVIEW_URL } from '../../../constants.ts';
import {
  selectFilmGenres,
  selectFilmsWithReviews,
  selectOverallDataFetchStatus,
} from '../../../store/selectors.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks.ts';
import { Header } from '../../Header/Header.tsx';
import { Footer } from '../../Footer/Footer.tsx';
import { MainContent } from '../../MainContent.ts';
import { PageTitle } from '../../PageTitle/PageTitle.tsx';
import { FilmReviewCard } from '../../FilmReviewCard/FilmReviewCard.tsx';

import * as Styled from './HomePage.styles.ts';
import type { DataFetchStatus } from '../../../types/types.ts';
import { Filter } from '../../Filter/Filter.tsx';
import { setSelectedGenre } from '../../../store/films-slice.ts';
import type { IconButtonProps } from '../../IconButton/IconButton.tsx';

const COPY_FOR_DATA_FETCH_STATUS: Record<DataFetchStatus, string> = {
  error: `Sorry, we aren't able to load your reviews right now.`,
  idle: 'Loading…',
  loading: 'Loading…',
  succeeded: `Looks like you're yet to write a film review.`,
};

export const HomePage = () => {
  const navigate = useNavigate();
  const filmsWithReviews = useAppSelector(selectFilmsWithReviews);
  const overallDataFetchStatus = useAppSelector(selectOverallDataFetchStatus);
  const filmGenres = useAppSelector(selectFilmGenres);
  const areFilmsWithReviewsAvailable = filmsWithReviews.length > 0;
  const dispatch = useAppDispatch();

  const handleGenreFilterOnChange = (selectedOption: string | null) =>
    dispatch(setSelectedGenre(selectedOption));

  const headerTrailingIcon: IconButtonProps = {
    icon: 'plus',
    label: 'Write film review',
    onClick: () => navigate(WRITE_FILM_REVIEW_URL),
  };

  return (
    <>
      <Header trailingIcon={headerTrailingIcon} />

      <MainContent>
        <PageTitle title="Film Log">
          <Filter
            label="Filter by genre"
            onChange={handleGenreFilterOnChange}
            options={filmGenres}
          />
        </PageTitle>

        {areFilmsWithReviewsAvailable && (
          <Styled.Reviews>
            {filmsWithReviews.map((filmWithReview) => (
              <FilmReviewCard
                filmWithReview={filmWithReview}
                isTruncated={true}
                key={filmWithReview.film.id}
              />
            ))}
          </Styled.Reviews>
        )}

        {!areFilmsWithReviewsAvailable && (
          <Styled.NoReviews>
            {COPY_FOR_DATA_FETCH_STATUS[overallDataFetchStatus]}
          </Styled.NoReviews>
        )}
      </MainContent>

      <Footer />
    </>
  );
};
