import type { Film, FilmReview } from './types/types.ts';
import { FILM_REVIEWS_LOCAL_STORAGE_KEY, FILMS_API_URL } from './constants.ts';
import { loadDataFromLocalStorage } from './utilities.ts';

export const getFilmsService = async (): Promise<Film[]> => {
  const fetchFilmsResponse = await fetch(FILMS_API_URL);

  if (!fetchFilmsResponse.ok) {
    throw new Error(
      `Failed to fetch films with status: ${fetchFilmsResponse.status}.`,
    );
  }

  return await fetchFilmsResponse.json();
};

export const getFilmReviewsService = (): Promise<FilmReview[]> =>
  /*
      This is purely returned as a Promise to
      simulate it coming from an API for the task.

      In an ideal world where time is not limited,
      I would also check that filmReviewsFromLocalStorage
      adheres to FilmReview[]. For now, we shall presume
      it's all good.
  */
  new Promise((resolve) => {
    const filmReviewsFromLocalStorage =
      loadDataFromLocalStorage<FilmReview[]>(FILM_REVIEWS_LOCAL_STORAGE_KEY) ??
      [];

    resolve(filmReviewsFromLocalStorage ? filmReviewsFromLocalStorage : []);
  });
