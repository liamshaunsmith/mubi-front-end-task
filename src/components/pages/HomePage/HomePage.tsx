import { useNavigate } from 'react-router';

import { WRITE_REVIEW_URL } from '../../../constants.ts';
import {
  selectFilmsWithReviews,
  selectOverallDataFetchStatus,
} from '../../../store/selectors.ts';
import { useAppSelector } from '../../../hooks.ts';
import { Header } from '../../Header/Header.tsx';
import { Footer } from '../../Footer/Footer.tsx';
import { MainContent } from '../../MainContent.ts';
import { PageTitle } from '../../PageTitle.ts';
import { FilmReviewCard } from '../../FilmReviewCard/FilmReviewCard.tsx';

import * as Styled from './HomePage.styles.ts';
import type { DataFetchStatus } from '../../../types/types.ts';

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
  const areFilmsWithReviewsAvailable = filmsWithReviews.length > 0;

  return (
    <>
      <Header
        icons={{
          trailing: {
            icon: 'plus',
            label: 'Write film review',
            onClick: () => navigate(WRITE_REVIEW_URL),
          },
        }}
      />

      <MainContent>
        <PageTitle>Film Log</PageTitle>

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
