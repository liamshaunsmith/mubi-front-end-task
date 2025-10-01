import { type ReactNode, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks.ts';
import { fetchFilms } from '../store/films-slice.ts';
import { fetchFilmReviews } from '../store/film-reviews-slice.ts';

interface DataFetcherProps {
  children: ReactNode;
}

export const DataFetcher = (props: DataFetcherProps) => {
  const dispatch = useAppDispatch();
  const filmsState = useAppSelector((state) => state.films.status);
  const filmsReviewsState = useAppSelector((state) => state.filmReviews.status);

  useEffect(() => {
    if (filmsState === 'idle') {
      dispatch(fetchFilms());
    }
  }, [dispatch, filmsState]);

  useEffect(() => {
    if (filmsReviewsState === 'idle') {
      dispatch(fetchFilmReviews());
    }
  }, [dispatch, filmsReviewsState]);

  return props.children;
};
