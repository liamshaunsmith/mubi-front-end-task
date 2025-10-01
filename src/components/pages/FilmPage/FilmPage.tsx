import { useNavigate, useParams } from 'react-router';

import { Header } from '../../Header/Header.tsx';
import { MainContent } from '../../MainContent.ts';
import { Footer } from '../../Footer/Footer.tsx';
import { PageTitle } from '../../PageTitle.ts';
import { FilmReviewCard } from '../../FilmReviewCard/FilmReviewCard.tsx';

import * as Styled from './FilmPage.styles.ts';
import { useAppSelector } from '../../../hooks.ts';
import {
  selectFilmWithReview,
  selectOverallDataFetchStatus,
} from '../../../store/selectors.ts';
import type { DataFetchStatus } from '../../../types/types.ts';

type FilmPageParameters = {
  filmId: string;
};

const COPY_FOR_DATA_FETCH_STATUS: Record<DataFetchStatus, string> = {
  error: `Sorry, we aren't able to load your review right now.`,
  idle: 'Loading…',
  loading: 'Loading…',
  succeeded: `Sorry, we couldn't find that film review.`,
};

export const FilmPage = () => {
  const { filmId } = useParams<FilmPageParameters>();
  const navigate = useNavigate();
  const overallDataFetchStatus = useAppSelector(selectOverallDataFetchStatus);

  const filmWithReview = useAppSelector((state) =>
    selectFilmWithReview(state, filmId ?? ''),
  );

  return (
    <>
      <Header
        icons={{
          leading: {
            icon: 'leftArrow',
            label: 'Back to Film Log',
            onClick: () => navigate('/'),
          },
          trailing: {
            icon: 'delete',
            label: 'Delete film review',
            onClick: () => {},
          },
        }}
      />

      <MainContent>
        <PageTitle>Film Review</PageTitle>

        <Styled.Container>
          {filmWithReview && (
            <FilmReviewCard
              filmWithReview={filmWithReview}
              isTruncated={false}
            />
          )}

          {!filmWithReview && (
            <Styled.PlaceholderCopy>
              {!filmWithReview && overallDataFetchStatus === 'succeeded'
                ? COPY_FOR_DATA_FETCH_STATUS['succeeded']
                : COPY_FOR_DATA_FETCH_STATUS[overallDataFetchStatus]}
            </Styled.PlaceholderCopy>
          )}
        </Styled.Container>
      </MainContent>

      <Footer />
    </>
  );
};
