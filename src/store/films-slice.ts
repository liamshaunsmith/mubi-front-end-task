import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { DataFetchStatus, Film } from '../types/types.ts';
import { getFilmsService } from '../services.ts';

interface FilmsState {
  data: Film[];
  error: string | null;
  selectedGenre: string | null;
  status: DataFetchStatus;
}

const initialState: FilmsState = {
  error: null,
  data: [],
  selectedGenre: null,
  status: 'idle',
};

export const fetchFilms = createAsyncThunk<Film[]>(
  'films/fetchFilms',
  getFilmsService,
);

export const filmsSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? null;
      });
  },
  initialState,
  name: 'films',
  reducers: {
    setSelectedGenre: (state, action: PayloadAction<string | null>) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setSelectedGenre } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
