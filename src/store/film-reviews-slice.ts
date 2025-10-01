import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { DataFetchStatus, Film, FilmReview } from '../types/types.ts';
import { getFilmReviewsService } from '../services.ts';

interface FilmReviewsState {
  data: FilmReview[];
  error: string | null;
  status: DataFetchStatus;
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
  reducers: {
    addFilmReview: (state, action: PayloadAction<FilmReview>) => {
      state.data = [...state.data, action.payload];
    },
    deleteFilmReview: (state, action: PayloadAction<Film['id']>) => {
      state.data = state.data.filter(
        (filmReview) => filmReview.filmId !== action.payload,
      );
    },
  },
});

export const { addFilmReview, deleteFilmReview } = filmReviewsSlice.actions;
export const filmReviewsReducer = filmReviewsSlice.reducer;
