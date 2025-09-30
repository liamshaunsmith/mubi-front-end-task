import { useNavigate, useParams } from 'react-router';

import { MOCK_FILM_REVIEWS } from '../../../mock-film-reviews.ts';
import { Header } from '../../Header/Header.tsx';
import { MainContent } from '../../MainContent.ts';
import { Footer } from '../../Footer/Footer.tsx';
import { PageTitle } from '../../PageTitle.ts';
import { FilmReviewCard } from '../../FilmReviewCard/FilmReviewCard.tsx';

import * as Styled from './FilmPage.styles.ts';

type FilmPageParameters = {
  filmId: string;
};

export const FilmPage = () => {
  const { filmId } = useParams<FilmPageParameters>();
  const navigate = useNavigate();

  const film = MOCK_FILM_REVIEWS.find(
    (mockFilmReview) => mockFilmReview.id === filmId,
  );

  return (
    <>
      <Header
        icons={{
          leading: {
            icon: 'leftArrow',
            label: 'Back to Film Log',
            onClick: () => navigate('/'),
          },
          trailing: {
            icon: 'delete',
            label: 'Delete film review',
            onClick: () => {},
          },
        }}
      />

      <MainContent>
        <PageTitle>Film Review</PageTitle>

        <Styled.Container>
          {film && <FilmReviewCard film={film} isTruncated={false} />}

          {!film && (
            <Styled.NotFound>
              Sorry, we couldn't find that film review.
            </Styled.NotFound>
          )}
        </Styled.Container>
      </MainContent>

      <Footer />
    </>
  );
};
