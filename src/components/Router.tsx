import { BrowserRouter, Route, Routes } from 'react-router';

import { FILM_URL, WRITE_REVIEW_URL } from '../constants.ts';

import { HomePage } from './pages/HomePage/HomePage.tsx';
import { FilmPage } from './pages/FilmPage/FilmPage.tsx';
import { WriteReviewPage } from './pages/WriteReviewPage/WriteReviewPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HomePage />} index />
      <Route element={<FilmPage />} path={`${FILM_URL}/:filmId`} />
      <Route element={<WriteReviewPage />} path={WRITE_REVIEW_URL} />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  </BrowserRouter>
);
