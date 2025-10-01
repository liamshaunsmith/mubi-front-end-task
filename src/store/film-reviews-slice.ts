import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { FilmReview } from '../types/types.ts';
import { getFilmReviewsService } from '../services.ts';

interface FilmReviewsState {
  data: FilmReview[];
  error: string | null;
  status: 'error' | 'idle' | 'loading' | 'succeeded';
}

const initialState: FilmReviewsState = {
  data: [],
  error: null,
  status: 'idle',
};

export const fetchFilmReviews = createAsyncThunk<FilmReview[]>(
  'filmReviews/fetchFilmReviews',
  getFilmReviewsService,
);

export const filmReviewsSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilmReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFilmReviews.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? null;
      });
  },
  initialState,
  name: 'filmReviews',
  reducers: {},
});

export const filmReviewsReducer = filmReviewsSlice.reducer;
