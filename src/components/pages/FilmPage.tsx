import { useParams } from 'react-router';

type FilmPageParameters = {
  filmId: string;
};

export const FilmPage = () => {
  const { filmId } = useParams<FilmPageParameters>();

  return <>Film page placeholder. Film ID: {filmId}.</>;
};
