import { BrowserRouter, Route, Routes } from 'react-router';

import { FILM_REVIEW_URL, WRITE_FILM_REVIEW_URL } from '../constants.ts';

import { HomePage } from './pages/HomePage/HomePage.tsx';
import { FilmReviewPage } from './pages/FilmReviewPage/FilmReviewPage.tsx';
import { WriteReviewPage } from './pages/WriteReviewPage/WriteReviewPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HomePage />} index />
      <Route element={<FilmReviewPage />} path={`${FILM_REVIEW_URL}/:filmId`} />
      <Route element={<WriteReviewPage />} path={WRITE_FILM_REVIEW_URL} />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  </BrowserRouter>
);
