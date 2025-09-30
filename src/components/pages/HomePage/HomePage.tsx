import { useNavigate } from 'react-router';

import type { Film } from '../../../types/film.ts';
import { WRITE_REVIEW_URL } from '../../../constants.ts';
import { Header } from '../../Header/Header.tsx';
import { Footer } from '../../Footer/Footer.tsx';
import { MainContent } from '../../MainContent.ts';
import { PageTitle } from '../../PageTitle.ts';
import { FilmReviewCard } from '../../FilmReviewCard/FilmReviewCard.tsx';

import * as Styled from './HomePage.styles.ts';

const MOCK_FILM_REVIEWS: Film[] = [
  {
    id: 'annie-hall',
    title: 'Annie Hall',
    release_year: 1977,
    genres: ['Comedy', 'Romance', 'Drama'],
    cast: [
      {
        id: 'woody-allen',
        name: 'Woody Allen',
        credits: ['Director', 'Cast', 'Screenplay'],
      },
      {
        id: 'diane-keaton',
        name: 'Diane Keaton',
        credits: ['Cast'],
      },
      {
        id: 'tony-roberts',
        name: 'Tony Roberts',
        credits: ['Cast'],
      },
      {
        id: 'carol-kane',
        name: 'Carol Kane',
        credits: ['Cast'],
      },
      {
        id: 'marshall-brickman',
        name: 'Marshall Brickman',
        credits: ['Screenplay'],
      },
      {
        id: 'gordon-willis',
        name: 'Gordon Willis',
        credits: ['Cinematography'],
      },
      {
        id: 'wendy-greene-bricmont',
        name: 'Wendy Greene Bricmont',
        credits: ['Editing'],
      },
      {
        id: 'ralph-rosenblum',
        name: 'Ralph Rosenblum',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/188/image-w1280.jpg?1481117586',
    video_url:
      'https://trailers.mubi.com/188/c-annie-hall_xx_xx_640_683_188.mp4',
    review:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    id: 'annie-hall',
    title: 'Annie Hall',
    release_year: 1977,
    genres: ['Comedy', 'Romance', 'Drama'],
    cast: [
      {
        id: 'woody-allen',
        name: 'Woody Allen',
        credits: ['Director', 'Cast', 'Screenplay'],
      },
      {
        id: 'diane-keaton',
        name: 'Diane Keaton',
        credits: ['Cast'],
      },
      {
        id: 'tony-roberts',
        name: 'Tony Roberts',
        credits: ['Cast'],
      },
      {
        id: 'carol-kane',
        name: 'Carol Kane',
        credits: ['Cast'],
      },
      {
        id: 'marshall-brickman',
        name: 'Marshall Brickman',
        credits: ['Screenplay'],
      },
      {
        id: 'gordon-willis',
        name: 'Gordon Willis',
        credits: ['Cinematography'],
      },
      {
        id: 'wendy-greene-bricmont',
        name: 'Wendy Greene Bricmont',
        credits: ['Editing'],
      },
      {
        id: 'ralph-rosenblum',
        name: 'Ralph Rosenblum',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/188/image-w1280.jpg?1481117586',
    video_url:
      'https://trailers.mubi.com/188/c-annie-hall_xx_xx_640_683_188.mp4',
    review:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    id: 'annie-hall',
    title: 'Annie Hall',
    release_year: 1977,
    genres: ['Comedy', 'Romance', 'Drama'],
    cast: [
      {
        id: 'woody-allen',
        name: 'Woody Allen',
        credits: ['Director', 'Cast', 'Screenplay'],
      },
      {
        id: 'diane-keaton',
        name: 'Diane Keaton',
        credits: ['Cast'],
      },
      {
        id: 'tony-roberts',
        name: 'Tony Roberts',
        credits: ['Cast'],
      },
      {
        id: 'carol-kane',
        name: 'Carol Kane',
        credits: ['Cast'],
      },
      {
        id: 'marshall-brickman',
        name: 'Marshall Brickman',
        credits: ['Screenplay'],
      },
      {
        id: 'gordon-willis',
        name: 'Gordon Willis',
        credits: ['Cinematography'],
      },
      {
        id: 'wendy-greene-bricmont',
        name: 'Wendy Greene Bricmont',
        credits: ['Editing'],
      },
      {
        id: 'ralph-rosenblum',
        name: 'Ralph Rosenblum',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/188/image-w1280.jpg?1481117586',
    video_url:
      'https://trailers.mubi.com/188/c-annie-hall_xx_xx_640_683_188.mp4',
    review:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    id: 'annie-hall',
    title: 'Annie Hall',
    release_year: 1977,
    genres: ['Comedy', 'Romance', 'Drama'],
    cast: [
      {
        id: 'woody-allen',
        name: 'Woody Allen',
        credits: ['Director', 'Cast', 'Screenplay'],
      },
      {
        id: 'diane-keaton',
        name: 'Diane Keaton',
        credits: ['Cast'],
      },
      {
        id: 'tony-roberts',
        name: 'Tony Roberts',
        credits: ['Cast'],
      },
      {
        id: 'carol-kane',
        name: 'Carol Kane',
        credits: ['Cast'],
      },
      {
        id: 'marshall-brickman',
        name: 'Marshall Brickman',
        credits: ['Screenplay'],
      },
      {
        id: 'gordon-willis',
        name: 'Gordon Willis',
        credits: ['Cinematography'],
      },
      {
        id: 'wendy-greene-bricmont',
        name: 'Wendy Greene Bricmont',
        credits: ['Editing'],
      },
      {
        id: 'ralph-rosenblum',
        name: 'Ralph Rosenblum',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/188/image-w1280.jpg?1481117586',
    video_url:
      'https://trailers.mubi.com/188/c-annie-hall_xx_xx_640_683_188.mp4',
    review:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    id: 'annie-hall',
    title: 'Annie Hall',
    release_year: 1977,
    genres: ['Comedy', 'Romance', 'Drama'],
    cast: [
      {
        id: 'woody-allen',
        name: 'Woody Allen',
        credits: ['Director', 'Cast', 'Screenplay'],
      },
      {
        id: 'diane-keaton',
        name: 'Diane Keaton',
        credits: ['Cast'],
      },
      {
        id: 'tony-roberts',
        name: 'Tony Roberts',
        credits: ['Cast'],
      },
      {
        id: 'carol-kane',
        name: 'Carol Kane',
        credits: ['Cast'],
      },
      {
        id: 'marshall-brickman',
        name: 'Marshall Brickman',
        credits: ['Screenplay'],
      },
      {
        id: 'gordon-willis',
        name: 'Gordon Willis',
        credits: ['Cinematography'],
      },
      {
        id: 'wendy-greene-bricmont',
        name: 'Wendy Greene Bricmont',
        credits: ['Editing'],
      },
      {
        id: 'ralph-rosenblum',
        name: 'Ralph Rosenblum',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/188/image-w1280.jpg?1481117586',
    video_url:
      'https://trailers.mubi.com/188/c-annie-hall_xx_xx_640_683_188.mp4',
    review:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    id: 'annie-hall',
    title: 'Annie Hall',
    release_year: 1977,
    genres: ['Comedy', 'Romance', 'Drama'],
    cast: [
      {
        id: 'woody-allen',
        name: 'Woody Allen',
        credits: ['Director', 'Cast', 'Screenplay'],
      },
      {
        id: 'diane-keaton',
        name: 'Diane Keaton',
        credits: ['Cast'],
      },
      {
        id: 'tony-roberts',
        name: 'Tony Roberts',
        credits: ['Cast'],
      },
      {
        id: 'carol-kane',
        name: 'Carol Kane',
        credits: ['Cast'],
      },
      {
        id: 'marshall-brickman',
        name: 'Marshall Brickman',
        credits: ['Screenplay'],
      },
      {
        id: 'gordon-willis',
        name: 'Gordon Willis',
        credits: ['Cinematography'],
      },
      {
        id: 'wendy-greene-bricmont',
        name: 'Wendy Greene Bricmont',
        credits: ['Editing'],
      },
      {
        id: 'ralph-rosenblum',
        name: 'Ralph Rosenblum',
        credits: ['Editing'],
      },
    ],
    image_url:
      'https://assets.mubi.com/images/film/188/image-w1280.jpg?1481117586',
    video_url:
      'https://trailers.mubi.com/188/c-annie-hall_xx_xx_640_683_188.mp4',
    review:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
];

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
