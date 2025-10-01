import { configureStore } from '@reduxjs/toolkit';

import { filmsReducer } from './films-slice.ts';
import { filmReviewsReducer } from './film-reviews-slice.ts';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    filmReviews: filmReviewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
