import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from './store.ts';
import type {
  DataFetchStatus,
  FilmReview,
  FilmWithReview,
} from '../types/types.ts';

const selectFilms = (state: RootState) => state.films.data;
const selectFilmReviews = (state: RootState) => state.filmReviews.data;

export const selectOverallStatus = (state: RootState): DataFetchStatus => {
  if (state.films.status === 'error' || state.filmReviews.status === 'error') {
    return 'error';
  } else if (
    state.films.status === 'idle' ||
    state.filmReviews.status === 'idle'
  ) {
    return 'idle';
  } else if (
    state.films.status === 'loading' ||
    state.filmReviews.status === 'loading'
  ) {
    return 'loading';
  }

  return 'succeeded';
};

export const selectFilmsWithReviews = createSelector(
  [selectFilms, selectFilmReviews],
  (films, filmReviews) =>
    filmReviews.reduce(
      (filmsWithReviews: FilmWithReview[], currentFilmReview: FilmReview) => {
        const newFilmsWithReviews = filmsWithReviews;

        const correspondingFilmForCurrentFilmReview = films.find(
          (film) => film.id === currentFilmReview.filmId,
        );

        if (correspondingFilmForCurrentFilmReview) {
          newFilmsWithReviews.push({
            film: correspondingFilmForCurrentFilmReview,
            review: currentFilmReview,
          });
        }

        return newFilmsWithReviews;
      },
      [],
    ),
);
