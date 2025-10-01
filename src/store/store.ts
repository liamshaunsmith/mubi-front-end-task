import { configureStore } from '@reduxjs/toolkit';

import { saveDataToLocalStorage } from '../utilities.ts';
import { FILM_REVIEWS_LOCAL_STORAGE_KEY } from '../constants.ts';

import { filmsReducer } from './films-slice.ts';
import { filmReviewsReducer } from './film-reviews-slice.ts';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    filmReviews: filmReviewsReducer,
  },
});

let currentFilmReviewsDataState = store.getState().filmReviews.data;

store.subscribe(() => {
  const nextFilmReviewsDataState = store.getState().filmReviews.data;

  if (currentFilmReviewsDataState !== nextFilmReviewsDataState) {
    saveDataToLocalStorage(
      FILM_REVIEWS_LOCAL_STORAGE_KEY,
      store.getState().filmReviews.data,
    );

    currentFilmReviewsDataState = nextFilmReviewsDataState;
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
