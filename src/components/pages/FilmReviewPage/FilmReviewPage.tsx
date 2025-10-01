import { useNavigate, useParams } from 'react-router';

import { Header } from '../../Header/Header.tsx';
import { MainContent } from '../../MainContent.ts';
import { Footer } from '../../Footer/Footer.tsx';
import { PageTitle } from '../../PageTitle/PageTitle.tsx';
import { FilmReviewCard } from '../../FilmReviewCard/FilmReviewCard.tsx';

import * as Styled from './FilmReviewPage.styles.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks.ts';
import {
  selectFilmWithReview,
  selectOverallDataFetchStatus,
} from '../../../store/selectors.ts';
import type { DataFetchStatus } from '../../../types/types.ts';
import { deleteFilmReview } from '../../../store/film-reviews-slice.ts';
import type { IconButtonProps } from '../../IconButton/IconButton.tsx';

type FilmPageParameters = {
  filmId: string;
};

const COPY_FOR_DATA_FETCH_STATUS: Record<DataFetchStatus, string> = {
  error: `Sorry, we aren't able to load your review right now.`,
  idle: 'Loading…',
  loading: 'Loading…',
  succeeded: `Sorry, we couldn't find that film review.`,
};

export const FilmReviewPage = () => {
  const { filmId } = useParams<FilmPageParameters>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const overallDataFetchStatus = useAppSelector(selectOverallDataFetchStatus);

  const filmWithReview = useAppSelector((state) =>
    selectFilmWithReview(state, filmId ?? ''),
  );

  const handleDeleteFilmReview = () => {
    if (
      !filmId ||
      !confirm('Are you sure you want to delete this film review?')
    ) {
      return;
    }

    dispatch(deleteFilmReview(filmId));
    navigate('/');
  };

  const headerTrailingIcon: IconButtonProps | undefined = filmWithReview
    ? {
        icon: 'delete',
        label: 'Delete film review',
        onClick: handleDeleteFilmReview,
      }
    : undefined;

  return (
    <>
      <Header
        isBackwardNavigationEnabled={true}
        trailingIcon={headerTrailingIcon}
      />

      <MainContent>
        <PageTitle title="Film Review" />

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
