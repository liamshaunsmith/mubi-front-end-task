import { createSelector } from '@reduxjs/toolkit';

import type {
  DataFetchStatus,
  FilmReview,
  FilmWithReview,
} from '../types/types.ts';

import type { RootState } from './store.ts';

const selectFilms = (state: RootState) => state.films.data;
const selectFilmReviews = (state: RootState) => state.filmReviews.data;

export const selectOverallDataFetchStatus = (
  state: RootState,
): DataFetchStatus => {
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

export const selectFilmWithReview = createSelector(
  [selectFilms, selectFilmReviews, (_, filmId) => filmId],
  (films, filmReviews, filmId) => {
    const film = films.find((film) => film.id === filmId);

    const filmReview = filmReviews.find(
      (filmReview) => filmReview.filmId === filmId,
    );

    if (!film || !filmReview) {
      return undefined;
    }

    return {
      film,
      review: filmReview,
    };
  },
);

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
