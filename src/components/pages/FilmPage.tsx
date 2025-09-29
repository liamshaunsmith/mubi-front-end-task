import { useParams } from 'react-router';

import { Header } from '../Header/Header.tsx';
import { MainContent } from '../MainContent.ts';
import { Footer } from '../Footer/Footer.tsx';

type FilmPageParameters = {
  filmId: string;
};

export const FilmPage = () => {
  const { filmId } = useParams<FilmPageParameters>();

  return (
    <>
      <Header />
      <MainContent>Film page placeholder. Film ID: {filmId}.</MainContent>
      <Footer />
    </>
  );
};
