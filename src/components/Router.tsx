import { BrowserRouter, Route, Routes } from 'react-router';

import { HomePage } from './pages/HomePage.tsx';
import { FilmPage } from './pages/FilmPage.tsx';
import { WriteReviewPage } from './pages/WriteReviewPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HomePage />} index />
      <Route element={<FilmPage />} path="/film/:filmId" />
      <Route element={<WriteReviewPage />} path="/write-review" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  </BrowserRouter>
);
