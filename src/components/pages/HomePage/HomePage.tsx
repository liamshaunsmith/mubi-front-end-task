import { useNavigate } from 'react-router';

import { MOCK_FILM_REVIEWS } from '../../../mock-film-reviews.ts';
import { WRITE_REVIEW_URL } from '../../../constants.ts';
import { Header } from '../../Header/Header.tsx';
import { Footer } from '../../Footer/Footer.tsx';
import { MainContent } from '../../MainContent.ts';
import { PageTitle } from '../../PageTitle.ts';
import { FilmReviewCard } from '../../FilmReviewCard/FilmReviewCard.tsx';

import * as Styled from './HomePage.styles.ts';

export const HomePage = () => {
  const navigate = useNavigate();
  const areFilmReviewsAvailable = MOCK_FILM_REVIEWS.length > 0;

  return (
    <>
      <Header
        icons={{
          trailing: {
            icon: 'plus',
            label: 'Write film review',
            onClick: () => navigate(WRITE_REVIEW_URL),
          },
        }}
      />

      <MainContent>
        <PageTitle>Film Log</PageTitle>

        {areFilmReviewsAvailable && (
          <Styled.Reviews>
            {MOCK_FILM_REVIEWS.map((mockFilmReview) => (
              <FilmReviewCard
                film={mockFilmReview}
                isTruncated={true}
                key={mockFilmReview.id}
              />
            ))}
          </Styled.Reviews>
        )}

        {!areFilmReviewsAvailable && (
          <Styled.NoReview>
            Looks like you're yet to write a film review.
          </Styled.NoReview>
        )}
      </MainContent>

      <Footer />
    </>
  );
};
