import type { Film, FilmReview } from './types/types.ts';
import { FILM_REVIEWS_LOCAL_STORAGE_KEY, FILMS_API_URL } from './constants.ts';

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
  new Promise((resolve, reject) => {
    try {
      const filmReviewsLocalStorageItem = localStorage.getItem(
        FILM_REVIEWS_LOCAL_STORAGE_KEY,
      );

      if (!filmReviewsLocalStorageItem) {
        resolve([]);

        return;
      }

      const parsedFilmReviewsLocalStorageItem = JSON.parse(
        filmReviewsLocalStorageItem,
      );

      /*
          In an ideal world where time is not limited,
          I would be checking that parsedFilmReviewsLocalStorageItem
          adheres to FilmReview[]. For now, we shall presume it's
          all good.
      */

      resolve(parsedFilmReviewsLocalStorageItem);
    } catch (error) {
      reject(error);
    }
  });
